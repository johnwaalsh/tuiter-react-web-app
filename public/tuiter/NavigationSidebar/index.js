const NavigationSidebar = (active) => {
    let explore_color = ""
    let home_color = ""
    if(active === 'explore') {
        explore_color = 'bg-primary'
        home_color = ""
    } else {
        explore_color = ""
        home_color = "bg-primary"
    }
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
        <a class="p-2 text-white ${home_color}" style="text-decoration: none" href='../HomeScreen/index.html'>
            <i class="fas fa-house-user"></i>
            <span class="d-none d-xl-inline">Home</span>
        </a>
        <a class="p-2 text-white ${explore_color}" style="text-decoration: none" href='../ExploreScreen/index.html'>
            <i class="fas fa-solid fa-hashtag"></i>
            <span class="d-none d-xl-inline">Explore</span>
        </a>
        <div class="p-2 text-white">
            <i class="fas fa-solid fa-bell"></i>
            <span class="d-none d-xl-inline">Notifications</span>
        </div>
        <div class="p-2 text-white">
            <i class="fas fa-solid fa-envelope"></i>
            <span class="d-none d-xl-inline">Messages</span>
        </div>
        <div class="p-2 text-white">
            <i class="fas fa-solid fa-bookmark"></i>
            <span class="d-none d-xl-inline">Bookmarks</span>
        </div>
        <div class="p-2 text-white">
            <i class="fas fa-solid fa-user"></i>
            <span class="d-none d-xl-inline">Profile</span>
        </div>
        <div class="p-2 text-white">
            <i class="fas fa-solid fa-circle"></i>
            <span class="d-none d-xl-inline">More</span>
        </div>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

const main = $("#main")
main.html(NavigationSidebar)

export default NavigationSidebar;