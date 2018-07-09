<script>
  console.log("hello");
  console.log($(document).width());
  //change trending display based on screen size
  if((document).width() <= 450 && (document).height() <= 750){
    	console.log("test");
        {%- assign grid_item_width = 'medium--one-half large--one-half' -%}
        {%- assign image_size = '540x600' -%}
        {%- assign width = '540' -%}
        {%- assign height = '600' -%}
  }
</script>