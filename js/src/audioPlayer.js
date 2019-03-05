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
    container: document.getElementById('player'),
    mini: true,
    autoplay: true,
    theme: '#FADFA3',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    fixed: true,
    audio: [
        {
            name: 'name1',
            artist: '安瀬聖',
            url: 'http://music.163.com/song/media/outer/url?id=412951840.mp3',
            cover: 'cover1.jpg',
            theme: '#ebd0c2'
        },
        {
            name: 'ちいさな冒険者',
            artist: '茅野爱衣/雨宫天',
            url: 'http://music.163.com/song/media/outer/url?id=41645488.mp3',
            cover: 'cover2.jpg',
            theme: '#46718b'
        }
    ]
});