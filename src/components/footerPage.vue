<template>
    <div id="footer">
        <footer>
            <div class="footer-content">
                <p>&copy; 2023 DeephySolver. All rights reserved.</p>
                <div class="social-media">
                    <a href="https://www.twitter.com" >Twitter</a>
                    <a href="https://www.linkedin.com/company/deephy-technologies/" >LinkedIn</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
    name:'footerPage',
}

</script>
<style scoped>

.footer-content {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}
.footer-content p {
    margin: 0;
}

.social-media {
    margin-top: 10px;
}

.social-media a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
}

.social-media a:hover {
    text-decoration: underline;
}

</style>