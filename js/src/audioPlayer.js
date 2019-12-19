// const ap = new APlayer({
//     container: document.getElementById('aplayer'),
//     audio: [{
//         name: 'name',
//         artist: 'artist',
//         url: 'url.mp3',
//         cover: 'cover.jpg'
//     }]
// });

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: true,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    fixed: true,
    audio: [
        // {
        //     name: 'この感情は使命',
        //     artist: '安瀬聖',
        //     url: 'https://music.163.com/song/media/outer/url?id=412951840.mp3',
        //     cover: 'https://pic.ggemo.com/picgo/19200771556072853.jpg',
        // },
        // {
        //     name: 'ちいさな冒険者',
        //     artist: '茅野爱衣/雨宫天',
        //     url: 'https://music.163.com/song/media/outer/url?id=41645488.mp3',
        //     cover: 'https://pic.ggemo.com/picgo/3386495816508708.jpg',
        // },
        // {
        //     name: "Arrietty's Song",
        //     artist: 'Cecile Corbel',
        //     url: 'https://music.163.com/song/media/outer/url?id=2324487.mp3',
        //     cover: 'https://pic.ggemo.com/picgo/1716337650959823.jpg',
        // },
        // {
        //     name: "さよならの夏",
        //     artist: '手嶌葵',
        //     url: 'https://music.163.com/song/media/outer/url?id=656405.mp3',
        //     cover: 'https://pic.ggemo.com/picgo/2267192976481272.jpg',
        // },
        {
            name: "urar",
            artist: 'Chima',
            url: 'https://pic.ggemo.com/urar%20-%20Chima.mp3',
            cover: 'https://pic.ggemo.com/T002R300x300M000001k7VKU28Phst.jpg',
        },
        // {
        //     name: "Growing!",
        //     artist: '佐藤しずく',
        //     url: 'https://music.163.com/song/media/outer/url?id=653660.mp3',
        //     cover: 'https://pic.ggemo.com/picgo/5905476952948165.jpg',
        // },
        {
            name: "春よ、来い",
            artist: 'Smooth J',
            url: 'https://music.163.com/song/media/outer/url?id=511369.mp3',
            cover: 'https://pic.ggemo.com/6050612487861686.jpg',
        }
    ]
});