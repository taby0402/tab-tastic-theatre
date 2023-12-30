//confirms the ticket purchase
// PurchaseConfirmation.js
// import React from 'react';
// import styled from 'styled-components';

// // Styled components for the purchase confirmation
// const ConfirmationWrapper = styled.div`
//   /* Purchase confirmation wrapper styles */
// `;

// const ConfirmationMessage = styled.h2`
//   /* Purchase confirmation message styles */
// `;

// const PurchaseConfirmation = ({ orderId }) => {
//     return (
//         <ConfirmationWrapper>
//             <ConfirmationMessage>
//                 Thank you for your purchase! Your Order ID is: {orderId}
//             </ConfirmationMessage>
//             {/* Other purchase confirmation details or options */}
//         </ConfirmationWrapper>
//     );
// }

// export default PurchaseConfirmation;
// PurchaseConfirmationPage.js
import React from 'react';
import PurchaseConfirmation from './PurchaseConfirmation';
import styles from './PurchaseConfirmation.module.css'; // Import CSS module

const PurchaseConfirmationPage = ({ orderId }) => {
  return (
    <div className={styles['purchase-confirmation-page']}>
      <PurchaseConfirmation orderId={orderId} />
    </div>
  );
}

export default PurchaseConfirmationPage;
