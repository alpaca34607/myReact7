function ShowContentClass() {
    // 推薦課程資料
    const contentClassData = [
        {
            id: 1,
            imgURL: "../public/images/unity.jpg",
            h1: "Unity 5",
            word: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
            teacher: "講師:xxx",
            time: "影音課程時數:4小時",
            price: "原價NT$1600",
            discount: "NT$ 1200",
        },
        {
            id: 2,
            imgURL: "../public/images/gamesalad.jpg",
            h1: "GameSalad 2D 手游製作 ",
            word: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
            teacher: "講師:xxx",
            time: "影音課程時數:8小時",
            price: "原價NT$3200",
            discount: "NT$ 1600",
        },
        {
            id: 3,
            imgURL: "../public/images/gwd.jpg",
            h1:"gwd",
            word: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
            teacher: "講師:xxx",
            time: "影音課程時數:8小時",
            price: "原價NT$3200",
            discount: "NT$ 1600",
        }
    ]
    return (
        <>
            {
                contentClassData.map((item) => {
                    return (
                        <div className="classboxinner" key={item.id}>
                            <p><img src={item.imgURL} alt="課程" className="classimg" /></p>

                            <h1>{item.h1}</h1>
                            <p className="classword">{item.word}</p>
                            <p className="teacher">{item.teacher}</p>
                            <p className="time">{item.time}</p>
                            <p><span className="price">{item.price}</span><span className="discount">{item.discount}</span></p>
                            <button>付款上課去</button>
                        </div>

                    )
                })
            }
        </>
    )
}
export default ShowContentClass