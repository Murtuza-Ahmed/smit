// import Items from "../itemdata/Items.js";

import { useState } from "react";
import Items from "../itemdata/Items";

// import Items from "../itemdata/Items";


function Lists({ arr }) {
    // console.log(arr)
    const [itemArr, setItemArr] = useState(arr)
    // const bool = false
    // const itemArr = arr.map((item, index) => {
    //     return <Items data={item} />
    // })

    console.log("confirm", itemArr)
    return (
        < >
            <div>

                LISTS
            </div>
            {arr.map((item) => <Items data={item} />)}

        </>
    );
}

export default Lists