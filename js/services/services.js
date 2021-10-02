const PostData = async (url, data) => { //отвечает за постинг данных
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();//это промис
};

async function getResource(url) { //отвечает за постинг данных
    let res = await fetch(url);//promise

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);//объект ошибки для избежания ошибок
    }

    return await res.json();//это промис
};

export {PostData};
export {getResource};