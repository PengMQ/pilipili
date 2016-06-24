export const getAllVideos = ()=> {
    return [
        {
            videoType: 'music',
            videos: [
                {id: 1, imgUrl: 'imgs/music-a.jpg', alt: 'a'},
                {id: 2, imgUrl: 'imgs/music-b.jpg', alt: 'b'},
                {id: 3, imgUrl: 'imgs/music-c.jpg', alt: 'c'},
                {id: 4, imgUrl: 'imgs/music-d.jpg', alt: 'd'}]
        },

        {
            videoType: 'dance',
            videos: [
                {id: 1, imgUrl: 'imgs/dance-a.jpg', alt: 'a'},
                {id: 2, imgUrl: 'imgs/dance-b.jpg', alt: 'b'},
                {id: 3, imgUrl: 'imgs/dance-c.jpg', alt: 'c'},
                {id: 4, imgUrl: 'imgs/dance-d.jpg', alt: 'd'}]
        },

        {
            videoType: 'animation',
            videos: [
                {id: 1, imgUrl: '', alt: 'a'},
                {id: 2, imgUrl: '', alt: 'b'},
                {id: 3, imgUrl: '', alt: 'c'},
                {id: 4, imgUrl: '', alt: 'd'}]
        }];
};