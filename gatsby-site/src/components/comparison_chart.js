import React from "react"


const ComparisonChart = () => (
    <table id="diffenTable">
      <caption>
        Democrat versus Republican comparison chart
      </caption>
      <thead>
        <tr>
          <th class="acol"></th>
          <th class="vcol" scope="col">Democrat</th>
          <th class="vcol" scope="col">Republican</th>
        </tr>
      </thead>
      <tbody>
        <tr class="comparisonRow diff" id="row1">
          <th class="acol" scope="row">Philosophy</th>
          <td id="valtd1_1" class="vcol">
            <a href=
            "https://www.diffen.com/difference/Conservative_vs_Liberal">
            Liberal</a>, <a href=
            "https://www.diffen.com/difference/Left_Wing_vs_Right_Wing">
            left-leaning</a>.
          </td>
          <td id="valtd1_2" class="vcol">
            <a href=
            "https://www.diffen.com/difference/Conservative_vs_Liberal">
            Conservative</a>, <a href=
            "https://www.diffen.com/difference/Left_Wing_vs_Right_Wing">
            right-leaning</a>.
          </td>
        </tr>
        <tr class="comparisonRow diff" id="row2">
          <th class="acol" scope="row">Economic Ideas</th>
          <td id="valtd2_1" class="vcol">
            Minimum wages and progressive <a href=
            "https://www.diffen.com/difference/Category:Taxation">taxation</a>,
            i.e., higher tax rates for higher income brackets. Born
            out of <a href=
            "https://www.diffen.com/difference/Anti-Federalist_vs_Federalist">
            anti-federalist</a> ideals but evolved over time to
            favor more government regulation.
          </td>
          <td id="valtd2_2" class="vcol">Believe taxes shouldn't be
          increased for anyone (including the wealthy) and that
          wages should be set by the free market.</td>
        </tr>
        <tr class="comparisonRow diff" id="row3">
          <th class="acol" scope="row">Social and human ideas</th>
          <td id="valtd3_1" class="vcol">Based on community and
          social responsibility</td>
          <td id="valtd3_2" class="vcol">Based on individual rights
          and justice</td>
        </tr>
        <tr class="comparisonRow diff" id="row4">
          <th class="acol" scope="row">Stance on Military
          issues</th>
          <td id="valtd4_1" class="vcol">Decreased spending</td>
          <td id="valtd4_2" class="vcol">Increased spending</td>
        </tr>
        <tr class="comparisonRow diff" id="row5">
          <th class="acol" scope="row">Stance on Gay Marriage</th>
          <td id="valtd5_1" class="vcol">Support (some Democrats
          disagree)</td>
          <td id="valtd5_2" class="vcol">Oppose (some Republicans
          disagree)</td>
        </tr>
        <tr class="comparisonRow diff" id="row6">
          <th class="acol" scope="row">Stance on Abortion</th>
          <td id="valtd6_1" class="vcol">
            Should remain legal; support <a href=
            "https://www.diffen.com/difference/Roe_vs_Wade">Roe v.
            Wade</a>
          </td>
          <td id="valtd6_2" class="vcol">Should not be legal (with
          some exceptions); oppose Roe v. Wade</td>
        </tr>
        <tr class="comparisonRow diff" id="row7">
          <th class="acol" scope="row">Stance on Death Penalty</th>
          <td id="valtd7_1" class="vcol">While support for the
          death penalty is strong among Democrats, opponents of the
          death penalty are a substantial fraction of the
          Democratic base.</td>
          <td id="valtd7_2" class="vcol">A large majority of
          Republicans support the death penalty.</td>
        </tr>
        <tr class="comparisonRow diff" id="row8">
          <th class="acol" scope="row">Stance on Taxes</th>
          <td id="valtd8_1" class="vcol">Progressive (high income
          earners should be taxed at a higher rate). Generally not
          opposed to raising taxes to fund government.</td>
          <td id="valtd8_2" class="vcol">Tend to favor a "flat tax"
          (same tax rate regardless of income). Generally opposed
          to raising taxes.</td>
        </tr>
        <tr class="comparisonRow diff" id="row9">
          <th class="acol" scope="row">Stance on Government
          Regulation</th>
          <td id="valtd9_1" class="vcol">Government regulations are
          needed to protect consumers.</td>
          <td id="valtd9_2" class="vcol">
            Government regulations hinder free market <a href=
            "https://www.diffen.com/difference/Capitalism_vs_Socialism">
            capitalism</a> and job growth.
          </td>
        </tr>
        <tr class="comparisonRow diff" id="row10">
          <th class="acol" scope="row">Healthcare Policy</th>
          <td id="valtd10_1" class="vcol">
            Support universal healthcare; strong support of
            government involvement in healthcare, including
            <a href="https://www.diffen.com/difference/Medicaid_vs_Medicare">
             Medicare and Medicaid</a>. Generally support Obamacare.
          </td>
          <td id="valtd10_2" class="vcol">Private companies can
          provide healthcare services more efficiently than
          government-run programs. Oppose Obamacare provisions like
          (1) requirement for individuals to buy health insurance
          or pay a fine, (2) required coverage of
          contraceptives.</td>
        </tr>
        <tr class="comparisonRow diff" id="row11">
          <th class="acol" scope="row">Stance on Immigration</th>
          <td id="valtd11_1" class="vcol">There is greater overall
          support in the Democratic party for a moratorium on
          deporting - or offering a pathway to citizenship to -
          certain undocumented immigrants. e.g. those with no
          criminal record, who have lived in the U.S. for 5+
          years.</td>
          <td id="valtd11_2" class="vcol">Republicans are generally
          against amnesty for any undocumented immigrants. They
          also oppose President Obama's executive order that put a
          moratorium on deporting certain workers. Republicans also
          fund stronger enforcement actions at the border.</td>
        </tr>
      </tbody>
    </table>
)

export default ComparisonChart
