const wpImgSizes = ['full', 'small', 'medium', 'medium_large']

export const bestFalIcons = [
    'acorn',
    'alicorn',
    'award',
    'crow',
    'dagger',
    'dice-d10',
    'dove',
    'eye',
    'fire',
    'gem',
    'kiss-wink-heart',
    'ice-cream',
    'socks',
    'spa',
]
export const iconLibrary = [
    { id: 'facebook', icon: 'fa-facebook', prefix: '' },
    { id: 'instagram', icon: 'fa-instagram', prefix: '' },
    { id: 'email', icon: 'fa-envelope', prefix: 'mailto' },
    { id: 'phone', icon: 'fa-phone', prefix: 'tel' },
]

export const formatDateString = `dddd, <b>MMMM Do</b> YYYY @ h:mm a`

export const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function sortByNested(prop, arr) {
    prop = prop.split('.')
    var len = prop.length

    arr.sort(function(a, b) {
        let i = 0
        while (i < len) {
            a = a[prop[i]]
            b = b[prop[i]]
            i++
        }
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        } else {
            return 0
        }
    })
    return arr
}

export const alterWelcomeScreen = type => {
    if (type === 'offline') {
        document
            .querySelector('.loader-text')
            .style.setProperty('--content', "'You are offline'")
        document
            .querySelector('.loader-text')
            .style.setProperty('--letter-spacing', 0)
        console.log('offline')
    } else if (type === 'error') {
        document
            .querySelector('.loader-text')
            .style.setProperty('--content', "'Error")
        document
            .querySelector('.loader-text')
            .style.setProperty('--letter-spacing', 0)
        console.log('error')
    }
}

export const hideLoader = () => {
    const timer = 800
    const loader = document.querySelector('.loader-container')

    document.getElementById('root').classList.remove('hide-root')

    setTimeout(() => {
        loader.classList.add('loader-container--hide')
    }, timer)
}

export const setImg = (data, size) => {
    if (data._embedded['wp:featuredmedia'][0].code === 'rest_forbidden') {
        return null
    }
    let img = null
    if (!wpImgSizes.includes(size)) {
        size = 'medium_large'
    }
    if (data._embedded['wp:featuredmedia'][0]) {
        img =
            data._embedded['wp:featuredmedia'][0].media_details.sizes[size]
                .source_url
    }
    return img
}
