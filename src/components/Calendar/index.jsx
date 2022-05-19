import React from "react";
import "./style.css";
import calendar from "../../assets/Calendar.svg";
import Prev from "../../assets/ArrowLeft.svg";
import Next from "../../assets/ArrowRight.svg";

function Calendar() {
  return (
    <div className="DateFilter">
      <div className="DateFilter__search-interval">
        <p className="search-interval__text">Search date interval</p>
        <label className="search-interval__switcher">
          <input type="checkbox" />
          <span className="switcher__checkbox"></span>
        </label>
      </div>

      <div className="DateFilter__input">
        <p className="input__title">Date</p>
        <div className="input__section-input">
          <div className="section-input__image">
            <img src={calendar} alt="" />
          </div>
          <input className="date-input" type="text" />
        </div>
      </div>
      <div className="DateFilter__Calendar">
        <div className="Calendar__month-year">
          <img src={Prev} alt="" />
          <span className="left hook"></span>
          <span className="month-year" id="label">
            {" "}
            April 2020{" "}
          </span>
          <span className="right hook"></span>
          <img src={Next} alt="" />
        </div>
        <table className="Calendar__week">
          <td>Mon</td>
          <td>Tue</td>
          <td>Wed</td>
          <td>Thu</td>
          <td>Fri</td>
          <td>Sat</td>
          <td>Sun</td>
        </table>
        <table className="Calendar__day">
          <tbody>
            <tr>
              <td class="nil"></td>
              <td class="nil"></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td class="today">11</td>
              <td>12</td>
            </tr>
            <tr>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
            </tr>
            <tr>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
            </tr>
            <tr>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td class="nil"></td>
              <td class="nil"></td>
              <td class="nil"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;
