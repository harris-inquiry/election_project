import React from "react"
import { Table } from "react-bootstrap"


const ComparisonChart = () => (
  <Table hover>
    <thead>
      <tr>
        <th ></th>
        <th scope="col">Democrat</th>
        <th scope="col">Republican</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Philosophy</th>
        <td>Liberal, left-leaning.</td>
        <td>Conservative, right-leaning.</td>
      </tr>
      <tr>
        <th scope="row">Economic Ideas</th>
        <td>Minimum wages and progressive taxation, i.e., higher tax rates for
          higher income brackets. Born out of anti-federalist ideals but evolved over time to favor more
          government regulation.</td>
        <td>Believe taxes shouldn't be increased for anyone (including the
          wealthy) and that wages should be set by the free market.</td>
      </tr>
      <tr>
        <th scope="row">Social and human ideas</th>
        <td>Based on community and social responsibility</td>
        <td>Based on individual rights and justice</td>
      </tr>
      <tr>
        <th scope="row">Stance on Military issues</th>
        <td>Decreased spending</td>
        <td>Increased spending</td>
      </tr>
      <tr>
        <th scope="row">Stance on Gay Marriage</th>
        <td>Support (some Democrats disagree)</td>
        <td>Oppose (some Republicans disagree)</td>
      </tr>
      <tr>
        <th scope="row">Stance on Abortion</th>
        <td>Should remain legal; support Roe v. Wade</td>
        <td>Should not be legal (with some exceptions); oppose Roe v. Wade</td>
      </tr>
      <tr>
        <th scope="row">Stance on Death Penalty</th>
        <td>While support for the death penalty is strong among Democrats,
          opponents of the death penalty are a substantial fraction of the Democratic base.</td>
        <td>A large majority of Republicans support the death penalty.</td>
      </tr>
      <tr>
        <th scope="row">Stance on Taxes</th>
        <td>Progressive (high income earners should be taxed at a higher rate).
          Generally not opposed to raising taxes to fund government.</td>
        <td>Tend to favor a "flat tax" (same tax rate regardless of income).
          Generally opposed to raising taxes.</td>
      </tr>
      <tr>
        <th scope="row">Stance on Government Regulation</th>
        <td>Government regulations are needed to protect consumers.</td>
        <td>Government regulations hinder free market capitalism and job
          growth.</td>
      </tr>
      <tr>
        <th scope="row">Healthcare Policy</th>
        <td>Support universal healthcare; strong support of government
          involvement in healthcare, including Medicare and Medicaid. Generally support Obamacare.</td>
        <td>Private companies can provide healthcare services more efficiently
          than government-run programs. Oppose Obamacare provisions like (1) requirement for individuals to
          buy health insurance or pay a fine, (2) required coverage of contraceptives.</td>
      </tr>
      <tr>
        <th scope="row">Stance on Immigration</th>
        <td>There is greater overall support in the Democratic party for a
          moratorium on deporting - or offering a pathway to citizenship to - certain undocumented
          immigrants. e.g. those with no criminal record, who have lived in the U.S. for 5+ years.</td>
        <td>Republicans are generally against amnesty for any undocumented
          immigrants. They also oppose President Obama's executive order that put a moratorium on deporting
          certain workers. Republicans also fund stronger enforcement actions at the border.</td>
      </tr>
    </tbody>
  </Table>
)

export default ComparisonChart
