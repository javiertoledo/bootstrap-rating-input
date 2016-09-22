# Bootstrap Rating Input in 2Kb

This is another plugin that eases the generation of rating stars for jQuery and Bootstrap.

It generates widgets like this:

![Rating example](http://curso-rails-mini-blog.s3.amazonaws.com/rating.png)

## But, why another damn rating plugin???

After searching for existing widgets, I found three categories of them:

  - The ones that depends on PNG images.
  - The ones that adds A LOT of JavaScript and CSS code to my project.
  - The ones that adds A LOT of JavaScript and CSS code and depends on PNG images.

I don't want to add a whole multipurpose library just to put a few stars in my interface, I want my rating stars to look awesome in retina screens without worrying about image versions and dynamically replacing them, and Bootstrap already includes a set of beautifully designed vectorial icons by Glyphicons, so I thought I could create something simpler.

## Ok, enough talking, tell me how this thing works!

If you're using bower to manage your frontend dependencies you can install this plugin by just issuing this command:

    bower install bootstrap-rating-input --save

Otherwise you can just download `build/bootstrap-rating-input.min.js`, put it wherever you usually put JavaScripts in your project and include it on pages where you want to have forms with ratings:

    <script src="path/to/javascripts/bootstrap-rating-input.min.js" type="text/javascript"></script>

Now add a input of type *number* to your forms and add the class `rating` to it:

    <input type="number" name="your_awesome_parameter" id="some_id" class="rating" />

That's all! When page loads, you'll find a few stars where you'd expect to find the input. It works just like most of rating plugins, but for the basic usage you don't need to learn anything else about options or initializations, it just works out of the box.

### Wait, where is my input?

The plugin transforms your number input into a hidden field and wraps it inside a `div` (Or a `span` with the inline option) along with the star icons that will catch your clicks and save the selected values into the hidden field. By doing this, the field still exist in your form and can be submitted or its current value read by jQuery normally. Any CSS class in addition to `rating` will be copied to the wrapper for further styling options.

### Nice, but I want to use a different number of stars

Sure! You can set min and max values adding `data-min` and `data-max`:

    <input class="rating" data-max="5" data-min="1" id="some_id" name="your_awesome_parameter" type="number" />

### Can I set a default value?

Definitely, just set an integer value in your input that's within your min-max range':

    <input type="number" name="your_awesome_parameter" id="some_id" class="rating" data-clearable="remove" value="3"/>

### Can I set a special value for empty ratings?

You can add the attribute `data-empty-value` to indicate which value should send the form when it have an empty rating. This can be used, for example, to have an special value indicating the user didn't perform a selection:

    <input class="rating" data-max="5" data-min="1" id="some_id" name="your_awesome_parameter" type="number" data-empty-value="0"/>

By default empty ratings will behave like a regular empty field.

### And what about clearing the stars?

By default once you set a value it remains set and you can only change it by another, but you can add a clear link by just defining the `data-clearable` attribute:

    <input class="rating" data-clearable="remove" id="some_id" name="your_awesome_parameter" type="number" />

The content of `data-clearable` will appear as label for the link. If no value is provided the plugin will display just the clear icon.

You can also add a `data-clearable-remain` attribute to `true` if you'd like the clear link to remain up even when there are no stars selected:

    <input class="rating" data-clearable="remove" data-clearable-remain="true" id="some_id" name="your_awesome_parameter" type="number" />

By default the clear link will be hidden whenever no stars are selected.

### Can I use custom icon classes?

Now you can use custom icons thanks to the awesome contribution by [johncadigan](https://github.com/johncadigan). You can set different icon classes from gliphicons or even load icons from other libraries you're using. For instance here is how you generate a heart rating input with font awesome (You can see it working in the `demo.html` file):

    <input type="number" name="your_awesome_parameter" id="some_id" class="rating" data-clearable="remove" data-icon-lib="fa" data-active-icon="fa-heart" data-inactive-icon="fa-heart-o" data-clearable-icon="fa-trash-o"/>

If you want to use [FontAwesome](http://fontawesome.io/), remember to include the library in your header:

    <header>
      ...
      <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
      ...
    </header>

### Inline render

If you need to render the rating input inline with your text, use the `data-inline` option:

    <input type="number" name="your_awesome_parameter" id="some_id" class="rating" data-inline />

This will wrap the input in a `span` element instead of the default `div`.

### Readonly mode

Thanks to the contribution by [iyedb](https://github.com/iyedb) this plugin now features a read-only mode. Just add the attribute `data-readonly` to do the trick:

    <input type="number" name="your_awesome_parameter" id="some_id" class="rating" value="2" data-readonly />

### I don't want to be forced to add the `rating` class to the inputs

The `rating` class is used in combination with `input[type=number]` to let you autoload the rating plugin without coding anything, but you can apply this plugin to a input of any type by executing the method `rating` on a jQuery selection and pass the options in an object:

    $('input.my_class').rating({
      clearable: true
    });

## Requirements

You know... [Twitter Bootstrap](http://getbootstrap.com) and [jQuery](http://jquery.com)!

## It looks nice, but I want to complain because it doesn't fit my favorite use case

I have implemented this for my project in my environment and sharing it for free. Leave me an issue with your suggestions and I'll eventually push a fix, but this is MIT licensed, so you're welcome to fork this project, do pull requests with fixes and improvements, reimplement better versions of it for your own or do whatever you want, I'll be happy if it becomes useful or inspires at least one more person.

## Ok, I want to contribute

Nice! You're awesome, fork the project, and do whatever changes you want into `src/bootstrap-rating-input.js`. If you're kind enough I'll appreciate that you maintain the minified version updated and to ease this step I've automated minification with grunt, so if you have npm installed you can issue following command to update the minified version:

    $ npm install && grunt

Thanks!!
