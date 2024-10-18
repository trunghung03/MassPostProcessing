#version 330 core
out vec4 FragColor;
  
in vec2 TexCoords;

uniform sampler2D Texture;


const float offset = 1.0 / 300.0;  


void main()
{
    FragColor = texture(Texture, TexCoords);
    float average = 0.2126 * FragColor.r + 0.7152 * FragColor.g + 0.0722 * FragColor.b;
    FragColor = vec4(average, average, average, 1.0);
} 