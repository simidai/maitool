javascript: (function () {
  const url = window.decodeURI(window.location.toString());
  const diff = url == 'https://maimaidx.jp/maimai-mobile/record/musicGenre/search/?genre=99&diff=3' ? 'MAS' : 'REMAS';

  const music = document.getElementsByClassName('w_450 m_15 p_r f_0');
  const music_list = [];

  for (let i = 0; i < music.length; i++) {
    const stdx =
      music[i].getElementsByClassName('music_kind_icon')[0].currentSrc ==
      'https://maimaidx.jp/maimai-mobile/img/music_dx.png'
        ? 'DX'
        : 'ST';
    const level = music[i].getElementsByClassName('music_lv_block f_r t_c f_14')[0].innerText;
    const title = music[i].getElementsByClassName('music_name_block t_l f_13 break')[0].innerText;
    let score = '0.0000%';
    if (typeof music[i].getElementsByClassName('music_score_block w_112 t_r f_l f_12')[0] !== 'undefined') {
      score = music[i].getElementsByClassName('music_score_block w_112 t_r f_l f_12')[0].innerText;
    }
    score = parseFloat(score.slice(0, -1));
    let lamp = '';
    if (typeof music[i].getElementsByClassName('h_30 f_r')[1] !== 'undefined') {
      music[i].getElementsByClassName('h_30 f_r')[1].currentSrc ==
      'https://maimaidx.jp/maimai-mobile/img/music_icon_fcp.png?ver=1.60'
        ? (lamp = 'FC+')
        : music[i].getElementsByClassName('h_30 f_r')[1].currentSrc ==
          'https://maimaidx.jp/maimai-mobile/img/music_icon_fc.png?ver=1.60'
        ? (lamp = 'FC')
        : music[i].getElementsByClassName('h_30 f_r')[1].currentSrc ==
          'https://maimaidx.jp/maimai-mobile/img/music_icon_ap.png?ver=1.60'
        ? (lamp = 'AP')
        : music[i].getElementsByClassName('h_30 f_r')[1].currentSrc ==
          'https://maimaidx.jp/maimai-mobile/img/music_icon_app.png?ver=1.60'
        ? (lamp = 'AP+')
        : (lamp = '');
    }

    music_list.push({ diff, stdx, level, title, score, lamp });
  }
  const blob = new Blob([JSON.stringify(music_list)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  diff == 'MAS' ? (link.download = 'master_data.json') : (link.download = 'remaster_data.json');
  link.click();
})();
