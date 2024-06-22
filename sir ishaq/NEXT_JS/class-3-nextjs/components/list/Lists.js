import Items from "../item/Items";

export default function Lists({ arr }) {

    // const items = arr.map((item) => {
    //     return <Items text={item} />
    // })
    return (
        <>
            <ul>
                {arr.map((item, index) => <Items key={index} text={item} />)}
                {/* {items} */}
                {/* <Items text={arr[0]} /> */}
                {/* <Items text={arr[1]} /> */}
            </ul>
        </>
    )
}