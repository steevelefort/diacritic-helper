var chars = [
    'AaÁáÀàÂâÄäAĄąȺⱥǍǎȦȧẠạĀāÃãå',
    'CcĆćĈĉÇçȻȼČčĊċ',
    'EeÉéÈèÊêËëȨȩĘęɆɇĚěĖėẸẹĒēẼẽ',
    'IiÍíÌìÎîÏïĮįƗɨǏǐİiỊịĪīĨĩ',
    'JjĴĵɈɉǰ',
    'LlĹĺĻļŁłȽƚĽľḶḷ',
    'NnŃńǸǹŅņꞤꞥŇňṅṆṇÑñ',
    'OoÓóÒòÔôÖöǪǫØøƟɵǑǒȮȯỌọŌōÕõ',
    'SsŚśŜŝŞşꞨꞩŠšṠṡṢṣ',
    'TtẗŢţȾⱦŦŧŤťṪṫṬṭ',
    'UuÚúÙùÛûÜüŲųɄʉǓǔỤụŪūŨũ',
    'YyÝýỲỳŶŷŸÿɎɏẎẏỴỵȲȳỸỹ',
    'ZzŹźẐẑƵƶŽžŻżẒẓ'
];

var replace = function(text) {
    for (char in chars) {
        text = text.replace(new RegExp("[" + chars[char] + "]", "gi"), "[" + chars[char] + "]");
    }
    return text;
}

module.exports = replace;

