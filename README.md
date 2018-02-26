# rfid-hack


This module requires your raspberry pi(RPi) <b>SPI interface</b> to be enabled for being used. For that:<br/>

a) Go the terminal and type

  ```
   sudo raspi-config
  ```
b) This will open your raspi-config interface. Choose <b>Advanced Options</b> if no <b>Interfacing Options</b> is found else choose &nbsp;&nbsp;&nbsp;&nbsp;<b>Interfacing Options</b>. 

&nbsp;&nbsp;&nbsp; <img src="https://www.raspberrypi-spy.co.uk/wp-content/uploads/2014/08/rc_cmd_main_interfacing.png"/>

c) This will redirect you to next interface with various interfaces options. From those options choose the option <b>SPI</b>.<br/>

&nbsp;&nbsp;&nbsp; <img src="https://cdn.sparkfun.com/assets/learn_tutorials/4/4/9/spi-menu.png"/>

After following these procedures, just hook up your rc522 rfid reader to the raspberry pi with the following datasheet:

<table>
  <tr>
    <th>RC522 pin name</th>
    <th>RC522 pin number</th>
    <th>RPi pin number</th>
    <th>RPi pin name</th>
  </tr>
  <tr>
    <td>SDA</td>
    <td>1</td>
    <td>24</td>
    <td>GPIO8,CEO</td>
  </tr>
  <tr>
    <td>SCK</td>
    <td>2</td>
    <td>23</td>
    <td>GPIO11,SCKL</td>
  </tr>
  <tr>
    <td>MOSI</td>
    <td>3</td>
    <td>19</td>
    <td>GPIO10,MOSI</td>
  </tr>
  <tr>
    <td>MISO</td>
    <td>4</td>
    <td>21</td>
    <td>GPIO9,MISO</td>
  </tr>
   <tr>
    <td>IRQ</td>
    <td>5</td>
    <td>18</td>
    <td>GPIO24</td>
  </tr>
  <tr>
    <td>GND</td>
    <td>6</td>
    <td>6 or 9 or 20 or 25</td>
    <td>Ground</td>
  </tr>
  <tr>
    <td>RST</td>
    <td>7</td>
    <td>22</td>
    <td>GPIO25</td>
  </tr>
  <tr>
    <td>3.3V</td>
    <td>8</td>
    <td>1 or 17</td>
    <td>3V3</td>
  </tr>
 </table>

The schematic image is:

<img src="https://www.mathworks.com/matlabcentral/answers/uploaded_files/79445/pXzYv.png"/>

Note: The image is for RPi2, but the same works for RPi3 too!!!

After this, just browse to your node working directory through terminal via the command:
```
cd /folder_path
```
Then just install this node module as:
```
npm install rfid-hack
```
This will add the rfid-hack module to your node_modules folder
