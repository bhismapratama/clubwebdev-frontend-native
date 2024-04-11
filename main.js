const card = document.getElementById('card');

const fetchData = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch('https://clubwebdev-backend.vercel.app/api/brands');
            const datas = await res.json();
            resolve(datas);
        } catch (error) {
            reject(error);
        }
    });
}

fetchData()
    .then((data) => {
        const datas = data.data;
        console.log(datas);
        card.innerHTML = datas.map((item) => (`
            <div>
                <p>${item.name}</p>
                <p>${item.description}</p>
                <p>${item.logoURL}</p>
            </div>
        `));
    })
    .catch((error) => {
        throw new Error(error);
    });
