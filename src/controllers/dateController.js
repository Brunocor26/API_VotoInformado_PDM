const DateEvent = require('../models/DateEvent');

// @desc    Get all dates/events
// @route   GET /api/dates
// @access  Public
const getDates = async (req, res) => {
    try {
        const dates = await DateEvent.find();
        res.json(dates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a date/event
// @route   POST /api/dates
// @access  Private
const createDate = async (req, res) => {
    try {
        console.log("Received createDate body:", req.body);
        const dateEvent = await DateEvent.create(req.body);
        res.status(201).json(dateEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Vote in a debate
// @route   POST /api/dates/:id/vote
// @access  Private
const voteDebate = async (req, res) => {
    try {
        const { userId, candidateId } = req.body;
        const dateEvent = await DateEvent.findById(req.params.id);

        if (!dateEvent) {
            return res.status(404).json({ message: 'Debate not found' });
        }

        if (!dateEvent.votes) {
            dateEvent.votes = [];
        }

        // Check if user already voted
        const alreadyVoted = dateEvent.votes.find(v => v.userId === userId);
        if (alreadyVoted) {
            return res.status(400).json({ message: 'User already voted' });
        }

        dateEvent.votes.push({ userId, candidateId });
        await dateEvent.save();

        res.json(dateEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// @desc    Seed past debates with random votes
// @route   POST /api/dates/seed
// @access  Public (for dev/demo)
const seedDebates = async (req, res) => {
    try {
        const dates = await DateEvent.find();
        let updatedCount = 0;
        const now = new Date();

        for (const dateEvent of dates) {
            // Check if it's a debate (has candidates) and is in the past
            if (dateEvent.idCandidato1 && dateEvent.idCandidato2) {
                const eventDateStr = dateEvent.date; // YYYY-MM-DD
                const eventTimeStr = dateEvent.time || "00:00";
                const eventDateTime = new Date(`${eventDateStr}T${eventTimeStr}`);

                // If event is in the past and has no votes (or empty votes)
                if (eventDateTime < now && (!dateEvent.votes || dateEvent.votes.length === 0)) {
                    const votes = [];
                    const totalVotes = Math.floor(Math.random() * 50) + 20; // 20 to 70 votes

                    for (let i = 0; i < totalVotes; i++) {
                        const randomCand = Math.random() > 0.5 ? dateEvent.idCandidato1 : dateEvent.idCandidato2;
                        votes.push({
                            userId: `mock_user_${Math.floor(Math.random() * 10000)}`,
                            candidateId: randomCand
                        });
                    }

                    dateEvent.votes = votes;
                    await dateEvent.save();
                    updatedCount++;
                }
            }
        }

        res.json({ message: `Seeded ${updatedCount} debates with random votes.` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getDates,
    createDate,
    voteDebate,
    seedDebates
};
