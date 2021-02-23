[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Submission Guidelines

- Submit your homework via github pull request and please don't forget to fill out the form!
- Need a reminder on how to submit homework? [here](https://git.generalassemb.ly/seir-alahsa/w01d01/blob/master/notes/note_w01d01.03_hw_submission/note_w01d01-homework-submission.md)

---

# Matrix
## In the 20×20 grid below; What is the greatest sum of element of the array? 
```
let greatestSumMulti = function(){
var matrix = {
    numbers1: [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 00, 07, 78, 52, 12, 50, 77, 91, 08],
    numbers2: [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 00, 98, 43, 69, 48, 04, 56, 62, 00],
    numbers3: [81, 49, 31, 73, 55, 79, 14, 29, 03, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
    numbers4: [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
    numbers5: [22, 31, 16, 71, 51, 02, 06, 09, 41, 92, 36, 04, 22, 40, 40, 28, 66, 33, 13, 80],
    numbers6: [24, 47, 32, 60, 09, 03, 05, 02, 44, 75, 33, 53, 08, 36, 04, 20, 35, 17, 12, 50],
    numbers7: [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 00, 59, 54, 70, 66, 18, 38, 04, 17],
    numbers8: [67, 26, 20, 68, 02, 62, 12, 20, 05, 63, 94, 39, 03, 08, 40, 19, 66, 49, 04, 21],
    numbers9: [04, 55, 58, 05, 66, 73, 09, 26, 07, 07, 08, 08, 06, 83, 14, 88, 34, 89, 63, 72],
    numbers10: [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 00, 00, 61, 33, 97, 34, 31, 33, 95],
    numbers11: [08, 17, 53, 28, 02, 05, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
    numbers12: [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
    numbers13: [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
    numbers14: [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 00, 86, 52, 17, 77, 04, 89, 55, 40],
    numbers15: [04, 52, 08, 83, 97, 35, 09, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
    numbers16: [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
    numbers17: [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
    numbers18: [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
    numbers19: [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
    numbers20: [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48],
}
```
---

### Array Methods Challenge Problems

#### isPanagram

Using the following array - test whether each letter a-z (case insensitive) is used at least once

```js
const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
```


#### Working with data

- filter for products with a price that is less than 10, using the array below:
- sort alphabetically by product name

```js
const products = [
      {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
      },
      {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
      },
      {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
      },
      {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
      },
      {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
      },
      {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
      },
      {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
      },
      {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
      },
      {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
      },
      {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
      },
      {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
      },
      {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
      },
      {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
      },
      {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
      },
      {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
      },
      {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
      },
      {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
      },
      {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
      },
      {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
      },
      {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
      },
    ]
```

   ---

   *Copyright 2020, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*

   ---

