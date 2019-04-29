<template>
  <div id="about">
    <h2>
      <span>关于</span>
      <span>博远</span>
    </h2>
    <p>后世的人们说，李卫公之巧，天下无双，这当然是有所指的。从年轻时开始，他就发明了各种器具。比方说，他发明过开平方的机器，那东西是一个木头盒子，上面立了好几排木杆，密密麻麻，这一点像个烤羊肉串的机器。一侧上又有一根木头摇把，这一点又像个老式的留声机。你把右起第二根木杆按下去，就表示要开2的平方。转一下摇把，翘起一根木杆，表示2的平方根是1。摇两下，立起四根木杆，表示2的平方根是1.4。再摇一下，又立起一根木杆，表示2的平方根是1.41。千万不能摇第四下，否则那机器就会哗喇一下碎成碎片。这是因为这机器是糟朽的木片做的，假如是硬木做的，起码要到求出六位有效数字后才会垮。</p>
    <p>他曾经扛着这台机器到处跑，寻求资助，但是有钱的人说，我要知道平方根干什么？一些木匠，泥水匠倒有兴趣，因为不知道平方根盖房子的时候有困难，但是他们没有钱。直到老了之后，卫公才有机会把这发明做好了，把木杆换成了铁连枷，把摇把做到一丈长，由五六条大汉摇动，并且把机器做到小房子那么大，这回再怎么摇也不会垮掉，因为它结实无比。这个发明做好之后，立刻就被太宗皇帝买去了。这是因为在开平方的过程中，铁连枷挥得十分有力，不但打麦子绰绰有余，人挨一下子也受不了。而且摇出的全是无理数，谁也不知怎么躲。太宗皇帝管这机器叫卫公神机车，装备了部队，打死了好多人，有一些死在根号二下，有些死在根号三下。不管被根号几打死，都是脑浆迸裂。</p>
    <img src="http://images.boyuansports.com/logoCC.svg">
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
#about {
  text-align: center;
  padding-top: 60px;
  h2 {
    margin-top: 5%;
    text-align: center;
    font-size: 3rem;
    line-height: 100px;

    span:first-child {
      color: #f6ce00;
    }

    span:last-child {
      color: #25c179;
    }
  }
  p {
    border-left: #f6ce00 3px solid;
    border-right: #25c179 3px solid;
    text-indent: 2rem;
    text-align: left;
    margin: 20px 10% 0;
    padding: 10px 25px;
    line-height: 2rem;
    color: #666;
  }
  img {
    margin: 50px;
    width: 60px;
    text-align: center;
  }
}
</style>
