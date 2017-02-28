
# A movie ticket pricing website

#### 28 Feb., 2017, v.1.0.0

#### By Gloria Friesen and Mark Fisher

## Description
Web application to calculate movie ticket price based on movie, time of day, and age.

### Specifications

|Behavior|Input|Output|
|:---:|:---:|:---:|
|Creates ticket and returns the movie title correctly|"Finding Nemo"|"Finding Nemo"|
|Creates ticket and returns the time correctly|"9:00pm"|"9:00pm"|
|Creates ticket and returns the age correctly|"30"|30|
|Determine time of day category based on inputted time|9:00pm|prime-time|
|Adjust pricing based on movie selection|"Finding Nemo"|$7.00|
|Adjust pricing based on time of day selection|"3:00pm"|$6.00|
|Adjust pricing based on age|"72"|$5.00|
|Adjust pricing based on movie, time of day, and age|"Finding Nemo", "3:00pm", "12"|$5.00|

## Setup/Installation Requirements

* This repository is meant to be viewed. It can be viewed [here](https://Atticus29.github.io/movieTickets).

### Or if you're feeling bold, you can clone OR download a local instance of the site:

* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at [msysgit.github.io](https://git-for-windows.github.io/).
  * Clone this track survey repository by typing, `git clone https://github.com/Atticus29/movieTickets.git`
* Download
  * Click [here](https://github.com/Atticus29/movieTickets/archive/master.zip) to download the repo
  * Unzip the zipped repository
* Open the movieTickets folder and double-click on index.html.
* Make your selections and click submit as instructed on the site.


## Known Bugs

There are no known bugs. I'd be interested to know if you find any.

## Support and contact details

Please feel free to contact mark.aaron.fisher@gmail.com for questions

## Technologies Used

* git v. 2.11.1
* html5
* bootstrap v. 3.3.7
* CSS
* javaScript
* jQuery v. 3.1.1

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Mark Fisher and Gloria Friesen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
