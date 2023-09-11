// Write your code here.

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="faq">
      <div className="faq-con">
        <h1 className="head">FAQS</h1>
        <ul className="ul-con">
          {faqsList.map(each => (
            <FaqItem key={each.id} each={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
