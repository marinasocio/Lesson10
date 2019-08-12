function http() {
	return {
		request(url, options) {
			return new Promise(function(resolve, reject) {
				fetch(url, options)
					.then((response) => response.json())
					.then((data) => resolve(data))
					.catch((err) => reject(err));
			});
		}
	};
}

const myHttp = http();

myHttp
	.request('https://jsonplaceholder.typicode.com/posts')
	.then((result) => console.log(result))
	.catch((err) => console.error(err));

myHttp
	.request('https://jsonplaceholder.typicode.com/posts', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
			name: 'Marina Kul',
			username: 'Marinika'
		})
	})
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

// const newsService = {
// 	topHeadlines(country) {
// 		return Promise.resolve().then(() => {
// 			return myHttp.request();
// 		});
// 	}
// };

// form.addEventListener('submit', (e) => {
//   newsService.topHeadlines('ua')
//   .then()
//   .catch();
// });

// const newsContainer = document.querySelector('.news-container .row');

// document.addEventListener('DOMContentLoaded', function() {
// 	M.AutoInit();
// 	loadNews();
// });

// function loadNews() {
// 	newsService.topHeadlines('ua', onGetResponse);
// }

// function onGetResponse(err, res) {
// 	if (err) {
// 		alert(err);
// 		return;
// 	}

// 	if (!res.articles.length) {
// 		alert('Новостей не найдено');
// 		return;
// 	}

// 	renderNews(res.articles);
// }

// function renderNews(newsItems) {
// 	let fragment = '';

// 	newsItems.forEach((item) => {
// 		const el = newsTemplate(item);
// 		fragment += el;
// 	});

// 	newsContainer.insertAdjacentHTML('afterbegin', fragment);
// }

// function newsTemplate({ url, title, description, urlToImage } = {}) {
// 	return `
//     <div class="col s12">
//       <div class="card">
//         <div class="card-image">
//           <img src="${urlToImage}">
//           <span class="card-title">${title || ''}</span>
//         </div>
//         <div class="card-content">
//           <p>${description || ''}</p>
//         </div>
//         <div class="card-action">
//           <a href="${url}">Read more</a>
//         </div>
//       </div>
//     </div>
//   `;
// }
