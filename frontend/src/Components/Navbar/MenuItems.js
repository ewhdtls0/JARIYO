export const MenuItems = [
    {
        title:'홈',
        url:'/',
        cName:'nav-links'
    },
    {
        title:'숙소유형',
        url:'/reservation/호텔/헤네시스',
        cName:'nav-links'
    },
    {
        title:'예약 내역',
        url:'/mylist',
        cName:'nav-links'
    },
    {
        title:'더 보기',
        url:'#more',
        cName:'nav-links',
        more: {
            title: ['공지사항', '이벤트', 'qna'],
            url: ['/more/notice', '/more/event', '/more/qna']
        }
    }
]