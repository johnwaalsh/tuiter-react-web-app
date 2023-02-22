const PostSummaryItem = (post) => {
    return('<div class="d-flex border justify-content-between p-2">\n' +
        '                    <div class="d-flex flex-column">\n' +
        `                        <span class="text-secondary">${post.topic}</span>\n` +
        `                        <span class="fw-bold">${post.userName} <i class="fas fa-solid fa-check-circle"></i><span class="text-secondary fw-normal"> - ${post.time}</span> </span>\n` +
        `                        <span class="fw-bold">${post.title}</span>\n` +
        '                    </div>\n' +
        `                   <img class="wd-post-image-thumbnail float-end rounded-2 col-2 my-auto" style="height: 100%" src=${post.image}/>\n` +
        '                </div>');
}

const test_post = {
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "image": "../../images/react_blue_logo.png",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
}

// const main = $("#main")
// main.html(PostSummaryItem(test_post))

export default PostSummaryItem;