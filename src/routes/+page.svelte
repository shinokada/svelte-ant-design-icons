<script>
  import {
    AlertFilled,
    AlertOutlined,
    AlertTwotone,
    BookTwotone,
    BellTwotone,
    VideoCameraTwotone,
    UpSquareTwotone
  } from '$lib';
</script>

<AlertFilled size="80" color="#c61515" />
<AlertOutlined size="80" color="#c61515" />

<h1>Twotone</h1>
<h2>Default</h2>
<AlertTwotone size="80" />

<h2>Uses fill="#D9D9D9"</h2>
color to strokeColor change this to fill=insideColor
<AlertTwotone size="80" strokeColor="#c61515" insideColor="#84ffc9" />
<BellTwotone size="80" strokeColor="#c61515" insideColor="#cdaaff" />
<VideoCameraTwotone size="80" strokeColor="#c61515" insideColor="#9ec1ff" />

<h2>Two colors fill="#333" and fill="#E6E6E6"</h2>
fill="#333" to fill=fillStroke fill="#E6E6E6" to fill=fillInside
<BookTwotone size="80" strokeColor="#c61515" insideColor="#ef6667" />
<UpSquareTwotone size="80" strokeColor="#657ced" insideColor="#6eed65" />
