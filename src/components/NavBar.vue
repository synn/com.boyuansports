<template>
    <div id="navbar">
        <div id="logo">
            <img src="/logoCW.svg">
        </div>
        <div id="spacing"></div>
        <ul>
            <li>首页</li>
            <li>新闻</li>
            <li>联系</li>
            <li>关于</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style lang="less" scoped>
    #navbar {
        color: white;
        height: 40px;
        display: flex;
        flex-direction: row;
        background: rgba(0, 0, 0, 0.6);

        #logo {
            display: flex;
            flex-grow: 1;
            flex-shrink: 0;
            padding: 10px;
            align-items: center;

            img {
                height: 20px;
                flex-grow: 1;
            }
        }

        #spacing {
            display: flex;
            flex-grow: 5;
        }

        ul {
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            flex-shrink: 0;
            list-style: none;
            font-size: 0.8rem;

            &:hover {
                cursor: pointer;
            }

            li {
                min-width: 60px;
                text-align: center;
                line-height: 40px;
                flex-grow: 1;
                align-items: center;
            }
        }
    }
</style>
