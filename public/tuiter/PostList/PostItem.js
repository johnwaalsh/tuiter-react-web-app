const PostItem = (post) => {
    return('<div class="row mb-3 border-bottom p-2">' +
        `<div class="col-2"><img class="rounded-circle" style="height:10%" src=${post.profileImage}></div> <div class="col-10">
<div class="float-start">
<span class="text-white">${post.name} </span><i class="fas fa-solid fa-check-circle text-white"></i><span> @${post.userName} • ${post.time}</span>
</div><br>
<div>
<span>${post.comment}</span>
</div>
<div class="border rounded-3 mt-2 col-12 d-flex flex-column">
<img class="border rounded-3" src=${post.postImage}/>
<div class="d-flex flex-column p-3">
<span class="text-white mt-1 p">${post.postTitle}</span>
<span>${post.postDesc}</span>
<span><i class="fas fa-solid fa-link"></i> ${post.link}</span>
</div>
</div>
<div class="d-flex justify-content-between me-5 mt-3 mb-3">
<div class="">
<i class="far fa-comment"></i>
<span>${post.comments}</span>
</div>
<div> 
<i class="fas fa-retweet"></i>
<span>${post.retweets}</span>
</div>
<div>
<i class="far fa-heart"></i>
<span>${post.likes}</span>
</div>
<div>
<i class="fas fa-upload"></i>
</div>
</div>
</div></div>`);
}

const test_post = {
    "name": "Elon Musk",
    "userName": "elonmusk",
    "time": "23h",
    "profileImage": "../../images/elon_profile.jpg",
    "comment": "Amazing show about the @Inspiration4x mission!",
    "postImage": "../../images/spacesuit.jpg",
    "postTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    "postDesc" : "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
    "link": "netflix.com",
    "comments": "4.2K",
    "retweets": "3.5K",
    "likes": "37.5K",
}

const main = $("#main")
main.html(PostItem(test_post))

export default PostItem;