import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="d-flex">
                <div class="input-group">
                    <span class="wd-search-icon"><i class="fas fa-solid fa-search"></i></span>
                    <input type="text" class="wd-search-box form-control rounded-pill" placeholder="Search Tuiter">
                </div>
                <div class="p-2 text-primary">
                    <i class="fas fa-lg fa-solid fa-cog"></i>
                </div>
            </div>
        </div>
        <ul class="nav mb-2 nav-tabs">
            <div class="mt-2">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>
        </ul>
        <div class="m-2">
            <img src="../../images/starship.webp" class="col-12"/>
            <h3 class="text-white ms-2 wd-move-up">SpaceX's Starship</h3>
        </div>
        ${PostSummaryList()}
    `);
}

const main = $("#main")
main.html(ExploreComponent)

export default ExploreComponent;

