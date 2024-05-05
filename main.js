const display = document.getElementById('displayData');
const inputCurrentPage = document.getElementById('inputCurrentPage');
const inputLimit = document.getElementById('inputLimit');
const inputSearch = document.getElementById('inputSearch');

const apiUrl = 'https://clubwebdev-backend.vercel.app/api/news';

const fetchData = async () => {
    try {
        const title = inputSearch.value;
        const limit = inputLimit.value;
        const currentPage = inputCurrentPage.value;

        let url = `${apiUrl}?`;

        if (limit) {
            url += `limit=${limit}`;
        }
        if (currentPage) {
            url += `&currentPage=${currentPage}`;
        }
        if (title) {
            url += `&title=${title}`;
        }

        const response = await fetch(url);
        const { data } = await response.json();

        display.innerHTML = `
                ${data.map((item) => `
                    <div class="item">
                    <img src="${item.imageURL}" alt="${item.imageURL}">
                    <div class="title">Title: ${item.title}</div>
                    <div class="content">Content: ${item.content}</div>
                    <div class="author">Author: ${item.author}</div>
                    </div><br>`
                ).join('')}
        `;
    } catch (error) {
        console.error(error);
    }
};

inputLimit.addEventListener('input', fetchData);
inputCurrentPage.addEventListener('input', fetchData);
inputSearch.addEventListener('input', fetchData);

fetchData();
