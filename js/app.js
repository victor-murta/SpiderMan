document.addEventListener('DOMContentLoaded', () => {
    
    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 2,
    {width: '100%'},
    {width: '0%', delay: 6, ease: Expo.easeInOut} )

    .fromTo('.bg-video', 2,
    {width: '100%', opacity: 0},
    {width: '0%', opacity: 1 , ease: Expo.easeInOut},'-=1'
    )

    .fromTo('.logo', 2,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1 , ease: Expo.easeInOut},'-=0.5'
    )
    
    .fromTo('.nav-list', 2,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1 , ease: Expo.easeInOut},'-=0.5'
    )

    .fromTo('.item-1', 1,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1 , ease: Expo.easeInOut},'-=0.3'
    )

    .fromTo('.item-2', 1,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1 , ease: Expo.easeInOut},'-=0.3'
    )
    .fromTo('.item-3', 1,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1 , ease: Expo.easeInOut},'-=0.3'
    )
    .fromTo('.item-4', 1,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1 , ease: Expo.easeInOut},'-=0.3'
    )
    .fromTo('.item-5', 1,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1 , ease: Expo.easeInOut},'-=0.5'
    )

})