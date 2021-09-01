<template>
    <div class="ui container">
        <div class="ui segment">
            <div class="ui form">
                <h1 class="ui header">Characteristics</h1>
                <div class="fields">
                    <div class="six wide field">
                    <label>Name</label>
                    <input type="text" placeholder="Name">
                    </div>
                    <div class="three wide field">
                    <label>Class</label>
                    <input type="text" placeholder="Class">
                    </div>
                    <div class="three wide field">
                    <label>Race</label>
                    <input type="text" placeholder="Race">
                    </div>
                    <div class="two wide field">
                    <label>Weight</label>
                    <input type="text" placeholder="Weight">
                    </div>
                    <div class="two wide field">
                    <label>Height</label>
                    <input type="text" placeholder="Height">
                    </div>
                </div>
                <div class="fields">
                    <div class="two wide field">
                    <label>Age</label>
                    <input type="text" placeholder="Age">
                    </div>
                    <div class="six wide field">
                    <label>Character Disposition</label>
                    <input type="text" placeholder="Character Disposition">
                    </div>
                    <div class="eight wide field">
                    <label>Disabling Characteristics</label>
                    <input type="text" placeholder="Disabling Characteristics">
                    </div>
                </div>


                <h1 class="ui header">Atributes</h1>
                <div class="ui grid">
                    <div class="five wide column">
                        <div class="ui compact raised segment">
                            <div class="fields">
                            <div class="six wide field">
                                <label>STR</label>
                                <div class="segmented-container">
                                    <i class="fa fa-hand-rock-o fa-2x selected"></i>
                                    <i class="fa fa-hand-rock-o fa-2x selected"></i>
                                    <i class="fa fa-hand-rock-o fa-2x"></i>
                                    <i class="fa fa-hand-rock-o fa-2x"></i>
                                    <i class="fa fa-hand-rock-o fa-2x"></i>
                                </div>
                            </div>
                            </div>
                            <div class="fields">
                                
                                <div class="six wide field">
                                    <label>DEX</label>
                                    <div class="segmented-container">
                                        <i class="fa fa-gavel fa-2x selected"></i>
                                        <i class="fa fa-gavel fa-2x"></i>
                                        <i class="fa fa-gavel fa-2x"></i>
                                        <i class="fa fa-gavel fa-2x"></i>
                                        <i class="fa fa-gavel fa-2x"></i>
                                    </div>
                                </div>

                            </div>
                            <div class="fields">
                                
                                <div class="six wide field">
                                    <label>INT</label>
                                    <div class="segmented-container">
                                        <i class="fa fa-book fa-2x selected"></i>
                                        <i class="fa fa-book fa-2x"></i>
                                        <i class="fa fa-book fa-2x"></i>
                                        <i class="fa fa-book fa-2x"></i>
                                        <i class="fa fa-book fa-2x"></i>
                                    </div>
                                </div>

                            </div>
                            <div class="fields">
                                <div class="six wide field">
                                    <label>EGO</label>
                                    <div class="segmented-container">
                                        <i class="fa fa-star fa-2x selected"></i>
                                        <i class="fa fa-star fa-2x selected"></i>
                                        <i class="fa fa-star fa-2x selected"></i>
                                        <i class="fa fa-star fa-2x"></i>
                                        <i class="fa fa-star fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="six wide column">
                        <div class="ui segment">
                            <div class="field">
                                <label>History</label>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="five wide column">
                        <div class="ui segment">
                            <div class="field">
                                <label>Skills</label>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
</template>

<script>

</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

    * {
    font-family: sans-serif;
    box-sizing: border-box;
    }

    .glyphicon {
    font-size: 200%;
    }

    form {
    display: flex;
    flex-flow: row;
    }

    input, textarea {
    width: 100%;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    }

    label {
    display: block;
    margin-top: 10px;
    }

    .segmented-container {
    width: 250px;
    }

    .fa {
    opacity: 0.3;
    transition: 0.3s;
    cursor: pointer;
    }

    .fa:hover {
    opacity: 0.75;
    }

    .fa.selected {
    opacity: 1;
    }

    .fa-heart {
    color: red;
    }

    .fa-shield {
    color: #333;
    }

    .fa-star {
    color: yellow;
    }

    .fa-book {
    color: brown;
    }

    .segmented-container {
    margin-top: 5px;
    margin-bottom: 20px;
    }

    form {
    width: 1000px;
    margin: 0 auto;
    }

    fieldset {
    width: 33%;
    margin: 10px;
    border-width: 0;
    }
</style>