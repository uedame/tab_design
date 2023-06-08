(() => {

  //ここにコマンド

  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  // ここで「data-nav」「data-content」のエレメントを配列で取得、
  // ちなみに「data-nav」の名前は何でもよい（例えば「data-nav」→「nav」でもいい）
  const $nav = $tab.querySelectorAll('[data-nav]')
  const $content = $tab.querySelectorAll('[data-content]')
  const ACTIVE_CLASS = 'is-active';
  const navlen = $nav.length;

  // 初期表示
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  //クリックしたらおこるイベント、handleClick関数を定義している
  const handleClick = (e) => {
    // preventDefaultはデフォルトの動作をキャンセルさせることができる
    // 例えば
    // チェックボックスをクリックすればチェックされる
    // リンクをクリックすればリンク先のページへ移動したり
    e.preventDefault();

    const $this = e.target;
    const targetVal = $this.dataset.nav;

    // 対象外のコンテンツはリセット
    // てゆーか、一度全てのエレメントをdisplay:noneにして、isactiveクラスを削除。
    let index = 0;
    while(index < navlen){
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }
    // ここでクリックした対象コンテンツをアクティブ化
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);

  };



  // nav要素に適応、ここでそれぞれのタブをクリックした時にhandleClick関数が発火するように指定している
  let index = 0;
  while (index < navlen) {
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
  }
  // console.log($nav);

})();