<template>
    <div id="navbar" @mouseover="mouseTip = true" @mouseleave="mouseTip = false">
        <div id="logo">
            <img src="./static/logoCW.svg">
        </div>
        <div id="spacing"></div>
        <ul v-if="mouseTip">
            <li>首页</li>
            <li>新闻</li>
            <li>联系</li>
            <li>关于</li>
        </ul>
        <ul v-else>
            <li>
                <font-awesome-icon :icon="['fas', 'home']" size="lg" />
            </li>
            <li>
                <font-awesome-icon :icon="['fas', 'feather']" size="lg" />
            </li>
            <li>
                <font-awesome-icon :icon="['fas', 'comments']" size="lg" />
            </li>
            <li>
                <font-awesome-icon :icon="['fas', 'seedling']" size="lg" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            mouseTip: false
        }
    }
}
</script>

<style lang="less" scoped>
    #navbar {
        color: white;
        height: 60px;
        display: flex;
        flex-direction: row;
        background: rgba(0, 0, 0, 0.8);

        #logo {
            display: flex;
            flex-grow: 1;
            flex-shrink: 0;
            padding: 10px;
            align-items: center;

            img {
                height: 40px;
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
                line-height: 60px;
                flex-grow: 1;
                align-items: center;
            }
        }
    }
</style>
