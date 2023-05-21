### get bundle id

`npx expo prebuild`

### Get all users that belong to merchant

  <!-- async function getUserDataFromMerchant() {
    const querySnapshot = await getDocs(
      collection(db, "merchants", "lumberjack", "users")
    );
    querySnapshot.forEach(async (doc) => {
      const {user} = doc.data();
      const userDoc = await getDoc(user);

      if (userDoc.exists()) {
        console.log("User data: ", userDoc.data());
      } else {
        console.log("No such user document!");
      }
    }); -->

### add data

  <!-- const handleData = async () => {
    try {
      const docRef = await addDoc(
        collection(db, "merchant", "lumberjack", "user"),
        {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        }
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }; -->
