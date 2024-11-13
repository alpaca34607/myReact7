// 建立特色元件
function ShowContent() {

    // 建立特色欄位
    const contentData = [
        {
            id: 1,


            h1: "教學影音",
            word: "莫名其妙的影音課程，認識世界上奇奇怪怪的Youtuber",
        },
        {
            id: 2,
            h1: "良性互動",
            word: "莫名其妙的影音課程，認識世界上奇奇怪怪的Youtuber",
        },
        {
            id: 3,
            h1: "趨勢分享",
            word: "莫名其妙的影音課程，認識世界上奇奇怪怪的Youtuber",
        },

    ]
    return (
        <>
            {
                contentData.map((item) => {
                    return (
                        
                            <div className="infoboxinner" key={item.id}>
                                <h1>{item.h1}</h1>
                                <p>{item.word}</p>
                            </div>
                        
                    )
                })
            }

        </>
    )
}

export default ShowContent