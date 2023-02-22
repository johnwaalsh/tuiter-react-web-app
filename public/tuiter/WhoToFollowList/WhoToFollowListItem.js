const WhoToFollowListItem = (who) => {
    return(' <div class="d-flex">\n' +
        `                        <img src=${who.avatarIcon} class="rounded-circle wd-user-image col-1" style="height: 100%"/>` +
        '                        <div class="ms-2 d-flex flex-column">' +
        `                            <span>${who.userName}<i class="fas fa-solid fa-check-circle"></i></span>` +
        `                            <span class="text-secondary">@${who.handle}</span>` +
        '                        </div>' +
        '                        <button class="btn btn-primary ms-auto rounded-pill">' +
        '                            Follow' +
        '                        </button>' +
        '                    </div>');
}

const virgin_galactic = {
    avatarIcon: '../../images/virgin_logo.png',
    userName: 'Virgin Galactic',
    handle: 'virgingalactic',
}

const main = $("#main")
main.html(WhoToFollowListItem(virgin_galactic))

export default WhoToFollowListItem;