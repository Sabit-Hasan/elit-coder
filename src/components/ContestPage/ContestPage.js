import CodeSection from "./CodeSection";
import { useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase.config";
import './ContestPage.css';

export default function ContestPage() {
  
  const [data, setData] = useState({});
  const starCountRef = ref(database, 'questions/');

  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    // updateStarCount(postElement, data);
    setData()
  });

  return (
    <>
      <div>
        {/* {
          data.map((item, index) => {
            <p>hello</p>
          })
        } */}
      </div>
    </>
  )
}