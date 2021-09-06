<template>
    <div class="ui container">
        <div class="ui segment">
            <div class="ui form">
                <div class="ui blue tag label">
                    <h1 class="ui header">Characteristics</h1>
                </div>
                <div class="ui divider"></div>
                <div class="ui secondary segment">
                    <div class="fields">
                        <div class="six wide field">
                        <label>Name</label>
                        <input type="text" placeholder="Name" v-model="name">
                        </div>
                        <div class="three wide field">
                        <label>Class</label>
                        <input type="text" placeholder="Class" v-model="charclass" >
                        </div>
                        <div class="three wide field">
                        <label>Race</label>
                        <input type="text" placeholder="Race" v-model="race">
                        </div>
                        <div class="two wide field">
                        <label>Weight</label>
                        <input type="number" placeholder="Weight" v-model="weight">
                        </div>
                        <div class="two wide field">
                        <label>Height</label>
                        <input type="number" placeholder="Height" v-model="height">
                        </div>
                    </div>
                    <div class="fields">
                        <div class="two wide field">
                        <label>Age</label>
                        <input type="number" placeholder="Age" v-model="age">
                        </div>
                        <div class="six wide field">
                        <label>Character Disposition</label>
                        <input type="text" placeholder="Character Disposition" v-model="chardisp">
                        </div>
                        <div class="eight wide field">
                        <label>Disabling Characteristics</label>
                        <input type="text" placeholder="Disabling Characteristics" v-model="dchar">
                        </div>
                    </div>
                </div>
                <div class="ui divider"></div>
                <div class="ui blue tag label">
                    <h1 class="ui header">Attributes</h1>
                </div>
                <div class="ui divider"></div>
                <div class="ui tertiary segment">
                    <div class="ui grid">
                        <div class="five wide column">
                            <div class="ui raised segment">
                                <label class="ui red ribbon label">STR</label>
                                <div class="ui divider"></div>
                                    <div class="ui buttons">
                                        <button v-on:click="checkStr(0)" v-bind:class="{ 'ui':true, 'basic':activeStr[0], 'blue': true, 'button':true}">+0</button>
                                        <button v-on:click="checkStr(1)" v-bind:class="{ 'ui':true, 'basic':activeStr[1], 'blue': true, 'button':true}">+1</button>
                                        <button v-on:click="checkStr(2)" v-bind:class="{ 'ui':true, 'basic':activeStr[2], 'blue': true, 'button':true}">+2</button>
                                        <button v-on:click="checkStr(3)" v-bind:class="{ 'ui':true, 'basic':activeStr[3], 'blue': true, 'button':true}">+3</button>
                                        <button v-on:click="checkStr(4)" v-bind:class="{ 'ui':true, 'basic':activeStr[4], 'blue': true, 'button':true}">+4</button>
                                    </div>
                                <div class="ui divider"></div>
                                <label class="ui teal ribbon label">DEX</label>
                                <div class="ui divider"></div>
                                    <div class="ui buttons">
                                        <button v-on:click="checkDex(0)" v-bind:class="{ 'ui':true, 'basic':activeDex[0], 'blue': true, 'button':true}">+0</button>
                                        <button v-on:click="checkDex(1)" v-bind:class="{ 'ui':true, 'basic':activeDex[1], 'blue': true, 'button':true}">+1</button>
                                        <button v-on:click="checkDex(2)" v-bind:class="{ 'ui':true, 'basic':activeDex[2], 'blue': true, 'button':true}">+2</button>
                                        <button v-on:click="checkDex(3)" v-bind:class="{ 'ui':true, 'basic':activeDex[3], 'blue': true, 'button':true}">+3</button>
                                        <button v-on:click="checkDex(4)" v-bind:class="{ 'ui':true, 'basic':activeDex[4], 'blue': true, 'button':true}">+4</button>
                                    </div>
                                <div class="ui divider"></div>
                                <label class="ui blue ribbon label">INT</label>
                                <div class="ui divider"></div>
                                    <div class="ui buttons">
                                        <button v-on:click="checkInt(0)" v-bind:class="{ 'ui':true, 'basic':activeInt[0], 'blue': true, 'button':true}">+0</button>
                                        <button v-on:click="checkInt(1)" v-bind:class="{ 'ui':true, 'basic':activeInt[1], 'blue': true, 'button':true}">+1</button>
                                        <button v-on:click="checkInt(2)" v-bind:class="{ 'ui':true, 'basic':activeInt[2], 'blue': true, 'button':true}">+2</button>
                                        <button v-on:click="checkInt(3)" v-bind:class="{ 'ui':true, 'basic':activeInt[3], 'blue': true, 'button':true}">+3</button>
                                        <button v-on:click="checkInt(4)" v-bind:class="{ 'ui':true, 'basic':activeInt[4], 'blue': true, 'button':true}">+4</button>
                                    </div>                                    
                                <div class="ui divider"></div>
                                <label class="ui yellow ribbon label">EGO</label>
                                <div class="ui divider"></div>
                                    <div class="ui buttons">
                                        <button v-on:click="checkEgo(0)" v-bind:class="{ 'ui':true, 'basic':activeEgo[0], 'blue': true, 'button':true}">+0</button>
                                        <button v-on:click="checkEgo(1)" v-bind:class="{ 'ui':true, 'basic':activeEgo[1], 'blue': true, 'button':true}">+1</button>
                                        <button v-on:click="checkEgo(2)" v-bind:class="{ 'ui':true, 'basic':activeEgo[2], 'blue': true, 'button':true}">+2</button>
                                        <button v-on:click="checkEgo(3)" v-bind:class="{ 'ui':true, 'basic':activeEgo[3], 'blue': true, 'button':true}">+3</button>
                                        <button v-on:click="checkEgo(4)" v-bind:class="{ 'ui':true, 'basic':activeEgo[4], 'blue': true, 'button':true}">+4</button>
                                    </div>
                            </div>
                        </div>

                        <div class="right floated eleven wide column">
                                <div class="ui segment">
                                    <div class="field">
                                        <label>Story</label>
                                        <textarea rows="10" v-model="story"></textarea>
                                    </div> 
                                    <div class="ui divider"></div>
                                    <div class="field">
                                        <label>Items</label>
                                        <textarea rows="10" v-model="items"></textarea>
                                    </div>      
                                </div>
                        </div>

                        <div class="right floated nine wide column">
                            <button class="ui primary button" type="button" v-on:click="saveFile()">Save Character</button>      
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){

        return {
            arr: [],
            str: '',
            dex:'',
            int:'',
            ego:'',
            name: '',
            race:'',
            charclass:'',
            weight:'',
            height:'',
            age:'',
            chardisp:'',
            dchar:'',
            story:'',
            items:'',
            activeStr: [true,true,true,true,true],
            activeDex: [true,true,true,true,true],
            activeInt: [true,true,true,true,true],
            activeEgo: [true,true,true,true,true]
        }
    },
    methods: {

        checkStr: function (position) {
            var number = position; 
            var number2 = position; 
            while(number >= 0 | number2 <= 5){
                this.activeStr[number] = false
                number -= 1;
                number2 += 1;
                this.activeStr[number2] = true
            }
            this.str = position;
        },
        checkDex: function (position) {
            var number = position; 
            var number2 = position; 
            while(number >= 0 | number2 <= 5){
                this.activeDex[number] = false
                number -= 1;
                number2 += 1;
                this.activeDex[number2] = true
            }
            this.dex = position;
        },
        checkInt: function (position) {
            var number = position; 
            var number2 = position; 
            while(number >= 0 | number2 <= 5){
                this.activeInt[number] = false
                number -= 1;
                number2 += 1;
                this.activeInt[number2] = true
            }
            this.int = position;
        },
        checkEgo: function (position) {
            var number = position; 
            var number2 = position; 
            while(number >= 0 | number2 <= 5){
                this.activeEgo[number] = false
                number -= 1;
                number2 += 1;
                this.activeEgo[number2] = true
            }
            this.ego = position;
        },
        addToArr: function () {
            this.arr.push({int: this.int,str: this.str,dex: this.dex,ego: this.ego, name: this.name, class: this.class, weight: this.weight, 
            height: this.height, age: this.age, chardisp: this.chardisp, dchar: this.dchar, story: this.story, items: this.items});
            console.log(1);
        },
        saveFile: function() {
            this.addToArr()
            const data = JSON.stringify(this.arr)
            window.localStorage.setItem('arr', data);
            console.log(JSON.parse(window.localStorage.getItem('arr')))
        }
    },
    

}

</script>

<style>
</style>