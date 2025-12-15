const navToggle = document.querySelector('.nav-toggle');
const globalNav = document.getElementById('global-nav');

if (navToggle && globalNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    //“現在メニューが開かれているかどうか” を true / false の形で取得
    //getAttribute は HTMLタグの「属性（attribute）」の値を読み取るためのメソッド

    //aria-expandedを、true/falseで切り替え
    navToggle.setAttribute('aria-expanded', String(!expanded));
    //expanded を反転させてaria-expanded の値としてセットする

    //メニューの開閉(クラスの付け外し)
    globalNav.classList.toggle('is-open');

    //ボタン自体にも状態クラスをつける
    navToggle.classList.toggle('is-open');
  });
}

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        window.location.href = "thanks.html";
      } else {
        alert("送信に失敗しました。入力内容をご確認のうえ、再度お試しください。");
      }
    } catch (err) {
      alert("通信に失敗しました。時間をおいて再度お試しください。");
    }
  });
}
