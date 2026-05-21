if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        init();
    });
} else {
    init();
}

function init() {
    overwriteSellerNameWithLink();
    wrapThumbnails();

    setTimeout(()=>{
        fetch('https://edge.allegro.pl/carts?decorators=CART,BENEFITS', {
            headers: {
                'accept': 'application/vnd.allegro.public.v6+json',
                'accept-language': 'pl-PL',
                'cache-control': 'no-cache',
                'cookie': '_cmuid=9c8fd07a-c558-4a74-a6ef-f77cfd5fc569; gdpr_permission_given=1; wdctx=v5.JrvrKoz7d7diIhmTgTPrlayNcUJVVFpNSvQpUZ9N0cenN2EXOWxGYaIqRCZM9AcYfaD0uSi6R1a-CZORVxHSUe-A5DwcFiGFX5HyOgUBMKAT8J4vUd1dGX6z59DSzAZB9AT9zbe1OlfkJx9TdmJxZwAhiE3hS4hIOsQ-Ey-Wf7DKlUBovUzcNwSdmwW83PVEU9Kdd5fnAKMeYkwGayqrncjqn8GURFjyK0qWXVjNZkfRGPo.WK3dHVgjQoCgLf4-Lr0qAQ.KlgJr8-uaXg; datadome=8wnPcs6uezBR2qMxhTntnc~PRTJ8yLAA82Tm97dp6iArwUx0FJZMZv_mou2OTpAoDT~YPVeVJqj3kt7L2hB7ocUYc_RHem65PgAU3AoHEIjQmziVPY7wwQ0yczMDSunf',
                'dnt': '1',
                'origin': 'https://allegro.pl',
                'pragma': 'no-cache',
                'priority': 'u=1, i',
                'referer': 'https://allegro.pl/',
                'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
                'sec-ch-ua-mobile': '?0',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
            }
        }).then(res=>res.json())
            .then(json=>console.log(json))
    })
}
