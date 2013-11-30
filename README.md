# Bootstrap Rating Input in 2Kb

This is another plugin that eases the generation of rating stars for jQuery and Bootstrap.

It generates widgets like this:

![Rating example](http://curso-rails-mini-blog.s3.amazonaws.com/rating.png)

It can also create widgets using any loaded icon set (gylph/fontawsome)

## But, why another damn rating plugin???

After searching for existing widgets, I found three categories of them:

  - The ones that depends on PNG images.
  - The ones that adds A LOT of JavaScript and CSS code to my project.
  - The ones that adds A LOT of JavaScript and CSS code and depends on PNG images.

I don't want to add a whole multipurpose library just to put a few stars in my interface, I want my rating stars to look awesome in retina screens without worrying about image versions and dynamically replacing them, and Bootstrap already includes a set of beautifully designed vectorial icons by Glyphicons, so I thought I could create something simpler.

## Ok, enough talking, tell me how this thing works!

Download `bootstrap-rating-input.min.js` and put it wherever you usually put JavaScripts in your project. Include it on pages where you want to have forms with ratings:

    <script src="path/to/javascripts/bootstrap-rating-input.min.js" type="text/javascript"></script>

Now add a input of type *number* to your forms and add the class `rating` to it:

    <input type="number" name="your_awesome_parameter" id="some_id" class="rating" />

That's all! When page loads, you'll find a few stars where you'd expect to find the input. It works just like most of rating plugins, but you don't need to learn anything about options or initializations, it just works out of the box.

### Wait, where has my input gone?

The plugin replaces your number input by a hidden field with identical name and id and adds interactive stars that will catch your clicks and save the selected values into the hidden field. In this way the form can be submitted or value readed by jQuery normally.

### Nice, but I want to use a different number of stars

Sure! You can set min and max values adding `data-min` and `data-max`:

    <input class="rating" data-max="4" data-min="0" id="some_id" name="your_awesome_parameter" type="number" />

### And what about clearing the stars?

By default once you set a value it remains set and you can only change it by another, but you can add a clear link by just defining the `data-clearable` attribute:

    <input class="rating" data-clearable="remove" id="some_id" name="your_awesome_parameter" type="number" />

The content of `data-clearable` will appear as label for the link. You can set a space or a &amp;nbsp; to make it appear as a naked close icon.

### I don't want to be forced to add the `rating` class to the inputs

The `rating` class is used in combination with `input[type=number]` to let you autoload the rating plugin without coding anything, but you can apply this plugin to a input of any type by executing the method `rating` on a jQuery selection:

    $('input.my_class').rating();

### I want to change the colors/display of the on/off icons

Set `data-classOn` and `data-classOff` to clasess with the display style you want.

### I want to use icon X instead of a boring star

Set `data-base` to the class for the icon you want to use.  You'll also need to set `data-classOn` and `data-classOff` as discussed above.

## Requirements

You know... [Twitter Bootstrap](http://twitter.github.io/bootstrap) and [jQuery](http://jquery.com)!

## Can I generate read-only stars for displaying?

If you think about it you don't want to use a plugin to generate static HTML code that is as simple as this:

    <i class='icon-star'></i><i class='icon-star'></i><i class='icon-star'></i><i class='icon-star-empty'></i><i class='icon-star-empty'></i>

You can easily generate such code with your favourite template engine and a loop. With Ruby and HAML it could look like this:

    / Given a variable val with the value you want to represent and a variable max that contains the maximum number of stars:
    - max.times do |i|
      %i{class: "icon-star#{'-empty' if i>val}"}

Well, HAML is awesome, but you are a programmer, so you'll be able to addapt this to your favorite language...

## It looks nice, but I want to complain because it doesn't fit my favorite use case

I have implemented this for my project in my environment and sharing it for free. Leave me an issue with your suggestions and I'll eventually push a fix, but this is MIT licensed, so you're welcome to fork this project, do pull requests with fixes and improvements, reimplement better versions of it for your own or do whatever you want, I'll be happy if it becomes useful or inspires at least one more person.
