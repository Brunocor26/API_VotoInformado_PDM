const { db } = require('./src/config/firebase');

async function deleteAll() {
    console.log('Deleting all petitions...');
    const snapshot = await db.collection('petitions').get();

    if (snapshot.empty) {
        console.log('No petitions found.');
        return;
    }

    const batch = db.batch();
    snapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
    });

    await batch.commit();
    console.log(`Successfully deleted ${snapshot.size} petitions.`);
}

deleteAll().then(() => process.exit(0)).catch(e => {
    console.error('Error deleting petitions:', e);
    process.exit(1);
});
