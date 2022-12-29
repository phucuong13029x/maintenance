function changeLanguage(lang) {
    localStorage.setItem("language", lang)
    location.reload();
}
var language = {
    vi: {
        titlePage: "Hệ thống đang bảo trì - YSwinner",
        titleHeader: "HỆ THỐNG ĐANG BẢO TRÌ",
        textCountdown: "Thời gian dự kiến",
        textContent_1: "Quý khách vui lòng quay lại sau.",
        textContent_2: "Xin lỗi vì sự bất tiện này.",
        textCountdownTime: ["Ngày", "Giờ", "Phút", "Giây"]
    },
    en: {
        titlePage: "System under maintenance - YSwinner",
        titleHeader: "THE SYSTEM IS MAINTENANCE",
        textCountdown: "Intend time",
        textContent_1: "Please come back later.",
        textContent_2: "Sorry for the inconvenience.",
        textCountdownTime: ["Date", "Hour", "Minute", "Second"]
    }
};
setInterval(function () {
        if (localStorage.getItem("language") === null) {
            localStorage.setItem("language", "vi")
            location.reload();
        }
})

if (window.location) {
    if (localStorage.getItem("language") == "vi") {
        langTitlePage.textContent = language.vi.titlePage;
        langTitleHeader.textContent = language.vi.titleHeader;
        langtextContent_1.textContent = language.vi.textContent_1;
        langtextContent_2.textContent = language.vi.textContent_2
        if (document.querySelector('.countdown') !== null) {
            langtextCountdown.textContent = language.vi.textCountdown;
            langtextCountdownDays.textContent = language.vi.textCountdownTime[0]
            langtextCountdownHours.textContent = language.vi.textCountdownTime[1]
            langtextCountdownMinutes.textContent = language.vi.textCountdownTime[2]
            langtextCountdownSeconds.textContent = language.vi.textCountdownTime[3]
        }
    }
    else if (localStorage.getItem("language") == "en") {
        langTitlePage.textContent = language.en.titlePage;
        langTitleHeader.textContent = language.en.titleHeader;
        langtextContent_1.textContent = language.en.textContent_1;
        langtextContent_2.textContent = language.en.textContent_2;
        if (document.querySelector('.countdown') !== null) {
            langtextCountdown.textContent = language.en.textCountdown;
            langtextCountdownDays.textContent = language.en.textCountdownTime[0]
            langtextCountdownHours.textContent = language.en.textCountdownTime[1]
            langtextCountdownMinutes.textContent = language.en.textCountdownTime[2]
            langtextCountdownSeconds.textContent = language.en.textCountdownTime[3]
        }
    }
}