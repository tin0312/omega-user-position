import { db } from "./firebaseConfig";
import { getDoc, doc} from "firebase/firestore";

async function GetPosition(userId) {
    try {
        const docSnap = await getDoc(doc(db, "waitlist", userId));
        if (docSnap.exists()) {
            const data = docSnap.data();
            // Assuming your document structure has a field named "position"
            const position = data.position;
            return position;
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.log("Error getting document:", error);
        return null;
    }
}

export default GetPosition;
