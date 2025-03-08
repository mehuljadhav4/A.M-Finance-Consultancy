// Check login status and user info when accessing home page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('home.html')) {
        if (!sessionStorage.getItem('isLoggedIn')) {
            window.location.href = 'index.html';
        } else {
            // Update welcome message with logged in user's name
            const userName = sessionStorage.getItem('userName');
            const welcomeHeading = document.querySelector('.header-logo h1');
            if (welcomeHeading) {
                welcomeHeading.textContent = `Welcome Back,${userName}`;
            }
        }
    }
});


// Message Display Functions
function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message success';
    messageDiv.textContent = message;
    document.querySelector('.login-container').appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 3000);
}

function showErrorMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message error';
    messageDiv.textContent = message;
    document.querySelector('.login-container').appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 3000);
}

// Section Content
const sectionContent = {
    creditCard: {
        title: 'Credit Card Options',
        content: `
            <div class="credit-cards-grid">
                <div class="card-item">
                    <img src="hdfc-icon.png" alt="HDFC Bank" class="bank-icon">
                    <h3>HDFC Bank</h3>
                    <button onclick="applyForCard('HDFC')" class="apply-btn">Apply Now</button>
                </div>

                <div class="card-item">
                    <img src="axis-icon.png" alt="Axis Bank" class="bank-icon">
                    <h3>Axis Bank</h3>
                    <button onclick="applyForCard('Axis')" class="apply-btn">Apply Now</button>
                </div>

                <div class="card-item">
                    <img src="idfc-icon.png" alt="IDFC Bank" class="bank-icon">
                    <h3>IDFC Bank</h3>
                    <button onclick="applyForCard('IDFC')" class="apply-btn">Apply Now</button>
                </div>

                <div class="card-item">
                    <img src="icici-icon.png" alt="ICICI Bank" class="bank-icon">
                    <h3>ICICI Bank</h3>
                    <button onclick="applyForCard('ICICI')" class="apply-btn">Apply Now</button>
                </div>

                <div class="card-item">
                    <img src="sbi-icon.png" alt="SBI Bank" class="bank-icon">
                    <h3>SBI Bank</h3>
                    <button onclick="applyForCard('SBI')" class="apply-btn">Apply Now</button>
                </div>

                <div class="card-item">
                    <img src="indusind-icon.png" alt="IndusInd Bank" class="bank-icon">
                    <h3>IndusInd Bank</h3>
                    <button onclick="applyForCard('IndusInd')" class="apply-btn">Apply Now</button>
                </div>

                <div class="card-item">
                    <img src="yes-icon.png" alt="Yes Bank" class="bank-icon">
                    <h3>Yes Bank</h3>
                    <button onclick="applyForCard('Yes')" class="apply-btn">Apply Now</button>
                </div>

                <div class="card-item">
                    <img src="au-icon.png" alt="AU Bank" class="bank-icon">
                    <h3>AU Bank</h3>
                    <button onclick="applyForCard('AU')" class="apply-btn">Apply Now</button>
                </div>

                <div class="card-item">
                    <img src="rbl-icon.png" alt="RBL Bank" class="bank-icon">
                    <h3>RBL Bank</h3>
                    <button onclick="applyForCard('RBL')" class="apply-btn">Apply Now</button>
                </div>

                <div class="card-item">
                    <img src="onecard-icon.png" alt="ONE Card" class="bank-icon">
                    <h3>ONE Card</h3>
                    <button onclick="applyForCard('ONE')" class="apply-btn">Apply Now</button>
                </div>

                <div class="card-item">
                    <img src="bob-icon.png" alt="Bank of Baroda" class="bank-icon">
                    <h3>Bank of Baroda</h3>
                    <button onclick="applyForCard('BOB')" class="apply-btn">Apply Now</button>
                </div>
            </div>
        `
    },
    personalLoan: {
        title: 'Personal Loan Options',
        content: `
            <!-- Personal Loan Apps Section -->
            <div class="loan-section">
                <h3>Personal Loan Apps</h3>
                <div class="apps-grid">
                    <div class="app-item">
                        <img src="moneyview.png" alt="MoneyView">
                        <h4>MoneyView</h4>
                        <p>Instant personal loans up to ₹5 Lakhs</p>
                        <button onclick="showITRUploadPopup('MoneyView')" class="apply-btn">Apply Now</button>
                    </div>
                    
                    <div class="app-item">
                        <img src="mpocket.png" alt="MPocket">
                        <h4>MPocket</h4>
                        <p>Quick loans with minimal documentation</p>
                        <button onclick="showITRUploadPopup('MPocket')" class="apply-btn">Apply Now</button>
                    </div>
                    
                    <div class="app-item">
                        <img src="kreditbee.png" alt="KreditBee">
                        <h4>KreditBee</h4>
                        <p>Instant personal loans up to ₹3 Lakhs</p>
                        <button onclick="showITRUploadPopup('KreditBee')" class="apply-btn">Apply Now</button>
                    </div>
                    
                    <div class="app-item">
                        <img src="cashe.png" alt="CASHe">
                        <h4>CASHe</h4>
                         <p>Instant digital loans for salaried</p>
                        <button onclick="showITRUploadPopup('CASHe')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="app-item">
                        <img src="truebalance.png" alt="TrueBalance">
                        <h4>TrueBalance</h4>
                        <p>Instant digital loans for salaried</p>
                        <button onclick="showITRUploadPopup('TrueBalance')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="app-item">
                        <img src="navi.png" alt="Navi">
                        <h4>Navi</h4>
                        <p>Instant digital loans </p>
                        <button onclick="showITRUploadPopup('Navi')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="app-item">
                        <img src="olyv.png" alt="Olyv">
                        <h4>Olyv</h4>
                         <p>Instant digital loans for salaried</p>
                        <button onclick="showITRUploadPopup('Olyv')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="app-item">
                        <img src="kissht.png" alt="Loan Kissht">
                        <h4>Loan kissht</h4>
                        <p>Instant Personal loans </p>
                        <button onclick="showITRUploadPopup('Loan kissht')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="app-item">
                        <img src="stashfin.png" alt="Stashfin">
                        <h4>Stashfin</h4>
                        <p>Instant Personal loans </p>
                        <button onclick="showITRUploadPopup('Stashfin')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="app-item">
                        <img src="airtel.png" alt="Airtel">
                        <h4>Airtel Finance</h4>
                         <p>Only for Airtel users</p>
                        <button onclick="showITRUploadPopup('Airtel Finance')" class="apply-btn">Apply Now</button>
                    </div>
                </div>
            </div>

            <!-- Bank Personal Loans Section -->
            <div class="loan-section">
                <h3>Bank Personal Loans</h3>
                <div class="banks-grid">
                    <div class="bank-item">
                        <img src="hdfc.png" alt="HDFC Bank">
                        <h4>HDFC Bank</h4>
                         <p>Interest rate: 10.50% onwards</p>
                        <button onclick="showITRUploadPopup('HDFC Bank')" class="apply-btn">Apply Now</button>
                    </div>
                    
                    <div class="bank-item">
                        <img src="icici.png" alt="ICICI Bank">
                        <h4>ICICI Bank</h4>
                         <p>Interest rate: 10.75% onwards</p>
                        <button onclick="showITRUploadPopup('ICICI Bank')" class="apply-btn">Apply Now</button>
                    </div>
                    
                    <div class="bank-item">
                        <img src="axis.png" alt="Axis Bank">
                        <h4>Axis Bank</h4>
                        <p>Interest rate: 11.25% onwards</p>
                        <button onclick="showITRUploadPopup('Axis Bank')" class="apply-btn">Apply Now</button>
                    </div>
                    
                    <div class="bank-item">
                        <img src="sbi.png" alt="SBI">
                        <h4>SBI</h4>
                          <p>Interest rate: 10.90% onwards</p>
                        <button onclick="showITRUploadPopup('SBI')" class="apply-btn">Apply Now</button>
                    </div>
                    
                    <div class="bank-item">
                        <img src="idfc.png" alt="IDFC First">
                        <h4>IDFC First</h4>
                          <p>Interest rate: 10.49% onwards</p>
                        <button onclick="showITRUploadPopup('IDFC First')" class="apply-btn">Apply Now</button>
                    </div>
                    
                    <div class="bank-item">
                        <img src="kotak.png" alt="Kotak Bank">
                        <h4>Kotak Bank</h4>
                        <p>Interest rate: 10.99% onwards</p>
                        <button onclick="showITRUploadPopup('Kotak Bank')" class="apply-btn">Apply Now</button>
                    </div>
                </div>
            </div>
        `
    },
    bankaccount: {
        title: 'Bank Account',
        content: `
            <div class="bank-container">
                <div class="bank-item">
                    <img src="au-icon.png" alt="Au Bank">
                    <h4>Au Bank</h4>
                    <p>AU Digital Zero Balance Saving Account</p>
                    <a href="https://www.aubank.in/personal-banking/savings-account/digital-savings-account" target="_blank" class="apply-btn">Apply Now</a>
                </div>
                <div class="bank-item">
                    <img src="kotak.png" alt="Kotak Bank">
                    <h4>Kotak Bank</h4>
                    <p>811 Zero Balance Saving Account</p>
                    <a href="https://www.kotak811.com/open-zero-balance-savings-account?utm_source=GoogleSEMiQ&utm_medium=Paid&utm_campaign=iQ-Kotak-BA-Bank-Account-Brand-09-24_BA-Exact&utm_content=kotak+811&gad_source=1&gclid=EAIaIQobChMI7cGSn43riwMVdKpmAh2-2ACtEAAYASAAEgJJlfD_BwE" target="_blank" class="apply-btn">Apply Now</a>
                </div>
                <div class="bank-item">
                    <img src="indusind-icon.png" alt="Indusind Bank">
                    <h4>Indusind Bank</h4>
                    <p>Indusind Bank Zero Balance Saving Account</p>
                    <a href="https://play.google.com/store/apps/details?id=com.indusind.indie" target="_blank" class="apply-btn">Apply Now</a>
                </div>
            </div>
        `
    },
    consultancy: {
        title: 'Professional Services',
        content: `
            <div class="services-wrapper">
                <div class="services-header">
                    <h2>Expert Financial Solutions</h2>
                    <p>Choose from our range of professional services</p>
                </div>
                
                <div class="services-grid">
                    <div class="service-item">
                        <div class="service-icon">
                            <img src="gst-icon.png" alt="GST Services">
                        </div>
                        <div class="service-content">
                            <h3>GST Registration</h3>
                            <div class="service-details">
                                <div class="service-pricing">
                                    <span class="current-price">₹5,000</span>
                                    <span class="discount">Save 20%</span>
                                </div>
                                <div class="service-benefits">
                                    <span>✓ 10-15 Days Processing</span>
                                    <span>✓ Expert Support</span>
                                </div>
                            </div>
                            <button onclick="initiatePayment('GST Registration', 2000)" class="service-cta">
                                Buy Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="service-item">
                        <div class="service-icon">
                            <img src="banking-icon.png" alt="Saving Account Banking Services">
                        </div>
                        <div class="service-content">
                            <h3>Saving Account Banking Services</h3>
                            <div class="service-details">
                                <div class="service-pricing">
                                    <span class="current-price">₹1,000</span>
                                    <span class="discount">Save 15%</span>
                                </div>
                                <div class="service-benefits">
                                    <span>✓ Account Opening</span>
                                    <span>✓ Financial Advisory</span>
                                </div>
                            </div>
                            <button onclick="initiatePayment('Saving Account Banking Services', 3500)" class="service-cta">
                                Buy Now 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="service-item">
                        <div class="service-icon">
                            <img src="tax-icon.png" alt="Salaried Income Tax Filing">
                        </div>
                        <div class="service-content">
                            <h3>Salaried Income Tax Filing</h3>
                            <div class="service-details">
                                <div class="service-pricing">
                                    <span class="current-price">₹1,200</span>
                                    <span class="discount">Save 25%</span>
                                </div>
                                <div class="service-benefits">
                                    <span>✓ Digital Filing</span>
                                    <span>✓ Tax Planning</span>
                                </div>
                            </div>
                            <button onclick="initiatePayment('Salaried Income Tax Filing', 1500)" class="service-cta">
                                Buy Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="service-item">
                        <div class="service-icon">
                            <img src="current.png" alt="Current Account Banking Services">
                        </div>
                        <div class="service-content">
                            <h3>Current Account Banking Services</h3>
                            <div class="service-details">
                                <div class="service-pricing">
                                    <span class="current-price">₹10,000</span>
                                    <span class="discount">Save 15%</span>
                                </div>
                                <div class="service-benefits">
                                    <span>✓ Current Account Opening</span>
                                    <span>✓ Financial Advisory</span>
                                </div>
                            </div>
                            <button onclick="initiatePayment('Current Account Banking Services', 3500)" class="service-cta">
                                Buy Now 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="service-item">
                        <div class="service-icon">
                            <img src="tax-self.png" alt="Self Employed Income Tax Filing">
                        </div>
                        <div class="service-content">
                            <h3>Self Employed Income Tax Filing</h3>
                            <div class="service-details">
                                <div class="service-pricing">
                                    <span class="current-price">₹1,500</span>
                                    <span class="discount">Save 25%</span>
                                </div>
                                <div class="service-benefits">
                                    <span>✓ Digital Filing</span>
                                    <span>✓ Business Tax Planning</span>
                                </div>
                            </div>
                            <button onclick="initiatePayment('Self Employed Income Tax Filing', 1500)" class="service-cta">
                                Buy Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="service-item">
                        <div class="service-icon">
                            <img src="gst-return-icon.png" alt="GST Return Filing">
                        </div>
                        <div class="service-content">
                            <h3>GST Return Filing(1Y)</h3>
                            <div class="service-details">
                                <div class="service-pricing">
                                    <span class="current-price">₹12,000</span>
                                    <span class="discount">Save 18%</span>
                                </div>
                                <div class="service-benefits">
                                    <span>✓ Monthly/Quarterly Returns</span>
                                    <span>✓ Compliance Support</span>
                                </div>
                            </div>
                            <button onclick="initiatePayment('GST Return Filing', 12000)" class="service-cta">
                                Buy Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>

                    </div>

                    <div class="service-item">
                        <div class="service-icon">
                            <img src="atm-card.png" alt="Credit Card(C)">
                        </div>
                        <div class="service-content">
                            <h3>Credit Card(C)</h3>
                            <div class="service-details">
                                <div class="service-pricing">
                                    <span class="current-price">₹1</span>
                                    
                                </div>
                                <div class="service-benefits">
                                    <span>✓ Application Filling</span>
                                    <span>✓ Credit Advisory</span>
                                </div>
                            </div>
                            <button onclick="initiatePayment('Credit Card(C)', 12000)" class="service-cta">
                                Buy Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>

                    </div>

                    <div class="service-item">
                        <div class="service-icon">
                            <img src="signing.png" alt="Personal Loan(C)">
                        </div>
                        <div class="service-content">
                            <h3>Personal Loan(C)</h3>
                            <div class="service-details">
                                <div class="service-pricing">
                                    <span class="current-price">₹1</span>
                                    
                                </div>
                                <div class="service-benefits">
                                    <span>✓ Application Filling</span>
                                    <span>✓ KYC</span>
                                </div>
                            </div>
                            <button onclick="initiatePayment('PersonalLoan(C)', 12000)" class="service-cta">
                                Buy Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>

                    </div>


                </div>
            </div>
        `           
    }                   
};

// Handle section clicks
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            const sectionId = this.id;
            const content = sectionContent[sectionId];
            if (content) {
                document.querySelector('.home-container').innerHTML = `
                    <button onclick="goBack()" class="back-btn">← Back</button>
                    <h2>${content.title}</h2>
                    ${content.content}
                `;
            }
        });
    });
});

// Utility Functions
function goBack() {
    window.location.reload();
}

function applyForCard(bank) {
    const formModal = `
        <div class="form-modal">
            <div class="form-container">
                <div class="form-header">
                    <h3>Apply for ${bank} Credit Card</h3>
                    <button onclick="closeCardForm()" class="close-btn">&times;</button>
                </div>
                
                <form id="creditCardForm" onsubmit="submitCardApplication(event, '${bank}')">
                    <div class="form-section">
                        <h4>Personal Details</h4>
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="fullName">Full Name*</label>
                                <input type="text" id="fullName" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="motherName">Mother's Name*</label>
                                <input type="text" id="motherName" required>
                            </div>

                            <div class="form-group">
                                <label for="dob">Date of Birth*</label>
                                <input type="date" id="dob" required>
                            </div>

                            <div class="form-group">
                                <label for="maritalStatus">Marital Status*</label>
                                <select id="maritalStatus" required>
                                    <option value="">Select Status</option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="divorced">Divorced</option>
                                    <option value="widowed">Widowed</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="mobile">Mobile Number*</label>
                                <input type="tel" id="mobile" pattern="[0-9]{10}" required>
                            </div>

                            <div class="form-group">
                                <label for="email">Email ID*</label>
                                <input type="email" id="email" required>
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h4>Identity Details</h4>
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="pan">PAN Number*</label>
                                <input type="text" id="pan" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" required>
                            </div>

                            <div class="form-group">
                                <label for="aadhar">Aadhar Number*</label>
                                <input type="text" id="aadhar" pattern="[0-9]{12}" required>
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h4>Residence Address</h4>
                        <div class="form-grid">
                            <div class="form-group full-width">
                                <label for="resAddress">Address Line*</label>
                                <input type="text" id="resAddress" required>
                            </div>

                            <div class="form-group">
                                <label for="resCity">City*</label>
                                <input type="text" id="resCity" required>
                            </div>

                            <div class="form-group">
                                <label for="resState">State*</label>
                                <select id="resState" required>
                                    <option value="">Select State</option>
                                    <option value="gujarat">Gujarat</option>
                                    <!-- Add other states -->
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="resPincode">Pincode*</label>
                                <input type="text" id="resPincode" pattern="[0-9]{6}" required>
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h4>Office Details</h4>
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="occupation">Occupation*</label>
                                <select id="occupation" required>
                                    <option value="">Select Occupation</option>
                                    <option value="salaried">Salaried</option>
                                    <option value="self-employed">Self Employed</option>
                                    <option value="business">Business Owner</option>
                                    <option value="professional">Professional</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="income">Annual Income*</label>
                                <input type="number" id="income" min="0" required>
                            </div>

                            <div class="form-group full-width">
                                <label for="officeAddress">Office Address*</label>
                                <input type="text" id="officeAddress" required>
                            </div>

                            <div class="form-group">
                                <label for="officeCity">Office City*</label>
                                <input type="text" id="officeCity" required>
                            </div>

                            <div class="form-group">
                                <label for="officeState">Office State*</label>
                                <select id="officeState" required>
                                    <option value="">Select State</option>
                                    <option value="gujarat">Gujarat</option>
                                    <!-- Add other states -->
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="officePincode">Office Pincode*</label>
                                <input type="text" id="officePincode" pattern="[0-9]{6}" required>
                            </div>
                        </div>
                    </div>

                    <div class="form-footer">
                        <label class="checkbox-container">
                            <input type="checkbox" required>
                            <span class="checkmark"></span>
                            I agree to the terms and conditions and authorize the bank to verify my details
                        </label>
                        <button type="submit" class="submit-btn">Submit Application</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', formModal);
}

function closeCardForm() {
    const modal = document.querySelector('.form-modal');
    if (modal) modal.remove();
}

function submitCardApplication(event, bank) {
    event.preventDefault();
    
    // Show ITR upload section after form submission
    const uploadSection = `
        <div class="upload-modal">
            <div class="upload-container">
                <h3>Upload ITR for ${bank} Credit Card</h3>
                <p class="upload-info">Please upload your latest ITR to complete the application</p>
                
                <div class="upload-box">
                    <input type="file" id="itrFile" accept=".pdf,.jpg,.jpeg,.png" class="file-input">
                    <label for="itrFile" class="file-label">
                        <i class="upload-icon">📄</i>
                        <span>Choose ITR File</span>
                    </label>
                    <p class="file-name" id="fileName"></p>
                </div>
                
                <button onclick="submitITR('${bank}')" class="submit-btn">Submit ITR</button>
                <button onclick="closeUploadModal()" class="cancel-btn">Cancel</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', uploadSection);
    
    // Show selected filename
    document.getElementById('itrFile').addEventListener('change', function() {
        const fileName = this.files[0]?.name || 'No file selected';
        document.getElementById('fileName').textContent = fileName;
    });
}

function submitITR(bank) {
    const fileInput = document.getElementById('itrFile');
    
    if (!fileInput.files.length) {
        alert('Please select an ITR file to upload');
        return;
    }
    
    // Show loading state
    const uploadContainer = document.querySelector('.upload-container');
    uploadContainer.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Uploading ITR...</p>
        </div>
    `;
    
    // Simulate upload process and then show success message
    setTimeout(() => {
        // Show thank you message
        const thankYouModal = `
            <div class="thank-you-modal">
                <div class="thank-you-container">
                    <div class="thank-you-content">
                        <div class="success-icon">✓</div>
                        <h2>Thank You!</h2>
                        <p>Your application for ${bank} has been submitted successfully.</p>
                        <p>Redirecting you to the application page...</p>
                        <button onclick="redirectToLender('${bank}')" class="ok-btn">Continue</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.innerHTML = thankYouModal;

        // Auto redirect after 2 seconds
        setTimeout(() => {
            redirectToLender(bank);
        }, 2000);
    }, 2000);
}

function redirectToLender(bank) {
    // Define URLs for different lenders
    const lenderUrls = {
        'MoneyView': 'https://moneyview.whizdm.com/share_lref?ref=ENEH1ZHE',
        'MPocket': 'https://click.mpkt.to/4ZwB/0nhozdso',
        'KreditBee': 'https://www.kreditbee.in/dl?kb=referrer&id=AMIAIYRRV',
        'CASHe': 'https://play.google.com/store/apps/details?id=co.tslc.cashe.android',
        'TrueBalance': 'https://kjkf8.app.goo.gl/Nb2NxFDx1qVrEex9A',
        'Navi': 'https://play.google.com/store/apps/details?id=com.naviapp',
        'Olyv': 'https://smartcoin.page.link/YtsHTVbJ84v5vKeTA',
        'Loan kissht': 'https://play.google.com/store/apps/details?id=com.fastbanking',
        'Stashfin': 'https://play.google.com/store/apps/details?id=com.stashfin.android',
        'Airtel Finance': 'https://play.google.com/store/apps/details?id=com.myairtelapp',
        'HDFC Bank': 'https://applyonline.hdfcbank.com/personal-loans.html?utm_source=paid_google&utm_medium=search&utm_campaign=HB_PL_PPC_GGL_SCH_dom_Ind_br_Ex_NTB_Sep_2024&utm_content=HB_PL_PPC_GGL_SCH_dom_Ind_br_Ex_NTB_Sep_2024_brand&utm_term=Hdfc%20Personal%20Loan&gclid=EAIaIQobChMIxMmphOfjiwMVV6RmAh0_QzpGEAAYASAAEgJ5sPD_BwE',
        'ICICI Bank': 'https://buy.icicibank.com/ucj/personal?ius=NEWTEST005&iup=PL852452&ITM=nli_personalLoan_productnavigation_applynow_Ctabtn',
        'Axis Bank': 'https://www.axisbank.com/retail/loans/personal-loan',
        'SBI': 'https://sbi.co.in/web/personal-banking/loans/personal-loans',
        'IDFC First': 'https://play.google.com/store/apps/details?id=com.idfcfirstbank.optimus',
        'Kotak Bank': 'https://kudosdigital.kotak.com/vivid/vividflow/run/personal_loan#Authentication'
    };

    // Get the URL for the selected bank
    const url = lenderUrls[bank];
    
    if (url) {
        // Open the URL in a new tab
        window.open(url, '_blank');
        // Redirect main window back to home
        window.location.href = 'home.html';
    } else {
        // Fallback if URL not found
        window.location.href = 'home.html';
    }
}

function closeUploadModal() {
    const modal = document.querySelector('.upload-modal');
    if (modal) modal.remove();
}

function contactBank(bank) 
{
    alert(`Please contact the bank directly for any inquiries or assistance.
    Bank Name: ${bank}
    Contact Number: 1800-180-1961
    Email: amfinanceconsultancy@gmail.com`);
}

function showPersonalLoanContent() {
    const personalLoanContent = `
        <div class="personal-loan-container">
            <h2 class="main-title">Personal Loan Services</h2>
            
            <!-- Personal Loan Apps Section -->
            <section class="loan-section">
                <h3>Personal Loan Apps</h3>
                <div class="apps-grid">
                    <div class="app-item">
                        <img src="moneyview.png" alt="MoneyView">
                        <h4>MoneyView</h4>
                        <button onclick="showITRUploadPopup('MoneyView')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="app-item">
                        <img src="mpocket.png" alt="MPocket">
                        <h4>MPocket</h4>
                        <button onclick="showITRUploadPopup('MPocket')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="app-item">
                        <img src="kreditbee.png" alt="KreditBee">
                        <h4>KreditBee</h4>
                        <button onclick="showITRUploadPopup('KreditBee')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="app-item">
                        <img src="cashe.png" alt="CASHe">
                        <h4>CASHe</h4>
                        <button onclick="showITRUploadPopup('CASHe')" class="apply-btn">Apply Now</button>
                    </div>
                </div>
            </section>

            <!-- Bank Personal Loans Section -->
            <section class="loan-section">
                <h3>Bank Personal Loans</h3>
                <div class="banks-grid">
                    <div class="bank-item">
                        <img src="hdfc.png" alt="HDFC Bank">
                        <h4>HDFC Bank</h4>
                        <button onclick="showITRUploadPopup('HDFC Bank')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="bank-item">
                        <img src="icici.png" alt="ICICI Bank">
                        <h4>ICICI Bank</h4>
                        <button onclick="showITRUploadPopup('ICICI Bank')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="bank-item">
                        <img src="axis.png" alt="Axis Bank">
                        <h4>Axis Bank</h4>
                        <button onclick="showITRUploadPopup('Axis Bank')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="bank-item">
                        <img src="sbi.png" alt="SBI">
                        <h4>SBI</h4>
                        <button onclick="showITRUploadPopup('SBI')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="bank-item">
                        <img src="idfc.png" alt="IDFC First">
                        <h4>IDFC First</h4>
                        <button onclick="showITRUploadPopup('IDFC First')" class="apply-btn">Apply Now</button>
                    </div>
                    <div class="bank-item">
                        <img src="kotak.png" alt="Kotak Bank">
                        <h4>Kotak Bank</h4>
                        <button onclick="showITRUploadPopup('Kotak Bank')" class="apply-btn">Apply Now</button>
                    </div>
                </div>
            </section>
        </div>
    `;
    
    
    // Get the personal loan section in your home page
    const personalLoanSection = document.getElementById('personal-loan-section');
    if (personalLoanSection) {
        personalLoanSection.innerHTML = personalLoanContent;
    }
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', showPersonalLoanContent);

// Function to handle loan app applications
function applyLoanApp(appName) {
    const modal = `
        <div class="modal">
            <div class="modal-content">
                <h3>Apply for ${appName} Loan</h3>
                <p>Please download the ${appName} app to proceed with your loan application.</p>
                <div class="app-links">
                    <a href="#" class="app-store-btn">Download on App Store</a>
                    <a href="#" class="play-store-btn">Get it on Google Play</a>
                </div>
                <button onclick="closeModal()" class="close-btn">Close</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modal);
}

// Function to handle bank loan applications
function applyBankLoan(bankName) {
    const modal = `
        <div class="modal">
            <div class="modal-content">
                <h3>Apply for ${bankName} Personal Loan</h3>
                <p>Our team will contact you shortly to assist with your loan application.</p>
                <form onsubmit="submitLoanEnquiry(event, '${bankName}')">
                    <input type="text" placeholder="Full Name" required>
                    <input type="tel" placeholder="Mobile Number" pattern="[0-9]{10}" required>
                    <input type="email" placeholder="Email Address" required>
                    <button type="submit" class="submit-btn">Submit Enquiry</button>
                </form>
                <button onclick="closeModal()" class="close-btn">Close</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modal);
}

// Function to handle loan enquiry submission
function submitLoanEnquiry(event, bankName) {
    event.preventDefault();
    closeModal();
    const thankYouModal = `
        <div class="thank-you-modal">
            <div class="thank-you-container">
                <div class="thank-you-content">
                    <div class="success-icon">✓</div>
                    <h2>Thank You!</h2>
                    <p>Your ${bankName} personal loan enquiry has been submitted successfully.</p>
                    <p>Our team will contact you shortly.</p>
                    <button onclick="closeThankYouModal()" class="ok-btn">OK</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', thankYouModal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) modal.remove();
}

function showPersonalLoanForm(bank) {
    // Implementation of showPersonalLoanForm function
}

function showPersonalLoanSections() {
    // Implementation of showPersonalLoanSections function
}

document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            sessionStorage.clear();
            window.location.href = 'index.html';
        });
    }
});

function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Check credentials for both users
            if ((username === 'Mehul_Jadhav' && password === 'Getyourloan') || 
                (username === 'Aj85556' && password === 'Getyourloan')) {
                
                // Set the user's name based on their username
                const userName = username === 'Mehul_Jadhav' ? 'Mehul Jadhav' : 'AkashDeep Jadhav';
                sessionStorage.setItem('userName', userName);
                sessionStorage.setItem('isLoggedIn', 'true');
                
                showSuccessMessage('Login successful! Redirecting...');
                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 1500);
            } else {
                showErrorMessage('Invalid username or password');
            }
        });
    }
});

// Message Display Functions
function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message success';
    messageDiv.textContent = message;
    document.querySelector('.login-container').appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 3000);
}

function showErrorMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message error';
    messageDiv.textContent = message;
    document.querySelector('.login-container').appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 3000);
}

function initiatePayment(service) {
    // First show amount input modal
    const amountModal = `
        <div class="payment-modal">
            <div class="payment-container">
                <h3>Payment for ${service}</h3>
                <div class="amount-input-section">
                    <label for="customAmount">Enter Amount (₹)</label>
                    <input type="number" id="customAmount" min="1" placeholder="Enter amount" class="amount-input">
                    <p class="error-msg" id="amountError" style="display: none; color: red;"></p>
                    <button onclick="proceedWithPayment('${service}')" class="proceed-btn">Proceed to Pay</button>
                    <button onclick="closePaymentModal()" class="cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', amountModal);
}

function proceedWithPayment(service) {
    const amount = document.getElementById('customAmount').value;
    const errorMsg = document.getElementById('amountError');
    
    // Validate amount
    if (!amount || amount <= 0) {
        errorMsg.textContent = "Please enter a valid amount";
        errorMsg.style.display = "block";
        return;
    }

    // Generate UPI payment URL
    const upiDetails = {
        pa: "9574044441@pthdfc",
        pn: "A.M Finance & Consultancy",
        tn: service,
        am: amount,
        cu: "INR"
    };
    
    const upiUrl = `upi://pay?${new URLSearchParams(upiDetails).toString()}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiUrl)}&size=200x200`;

    // Replace amount modal with QR code modal
    const qrModal = `
        <div class="payment-container">
            <h3>Pay for ${service}</h3>
            <p class="amount">Amount: ₹${amount}</p>
            
            <div class="payment-options">
                <h4>Scan QR Code to Pay</h4>
                <div class="qr-section">
                    <img src="${qrCodeUrl}" alt="UPI QR Code" class="qr-code">
                    <p class="scan-text">Scan with any UPI app</p>
                    <p class="upi-id">UPI ID: 9574044441@pthdfc</p>
                    
                    <div class="upi-apps">
                        <img src="gpay-icon.png" alt="Google Pay">
                        <img src="phonepe-icon.png" alt="PhonePe">
                        <img src="paytm-icon.png" alt="Paytm">
                        <img src="bhim-icon.png" alt="BHIM">
                    </div>
                </div>

                <div class="payment-status">
                    <p>After completing payment, click below</p>
                    <button onclick="verifyPayment('${service}', ${amount})" class="verify-btn">
                        I have made the payment
                    </button>
                </div>
            </div>
            
            <button onclick="closePaymentModal()" class="close-btn">Cancel</button>
        </div>
    `;
    
    document.querySelector('.payment-container').innerHTML = qrModal;
}

function verifyPayment(service, amount) {
    // Show processing message
    const processingMsg = `
        <div class="processing-message">
            <div class="spinner"></div>
            <p>Verifying payment...</p>
        </div>
    `;
    
    document.querySelector('.payment-container').innerHTML = processingMsg;
    
    // Simulate payment verification
    setTimeout(() => {
        // Show success message
        const successMsg = `
            <div class="success-message">
                <div class="success-icon">✓</div>
                <h3>Payment Successful!</h3>
                <p>Thank you for purchasing ${service}</p>
                <p>Amount paid: ₹${amount}</p>
                <button onclick="closePaymentModal()" class="close-btn">Close</button>
            </div>
        `;
        
        document.querySelector('.payment-container').innerHTML = successMsg;
    }, 2000);
}

function closePaymentModal() {
    const modal = document.querySelector('.payment-modal');
    if (modal) {
        modal.remove();
    }
}

function showITRUploadPopup(lender) {
    const uploadModal = `
        <div class="upload-modal">
            <div class="upload-container">
                <h3>Upload ITR for ${lender}</h3>
                <p class="upload-info">Please upload your latest ITR to complete the application</p>
                
                <div class="upload-box">
                    <input type="file" id="itrFile" accept=".pdf,.jpg,.jpeg,.png" class="file-input">
                    <label for="itrFile" class="file-label">
                        <i class="upload-icon">📄</i>
                        <span>Choose ITR File</span>
                    </label>
                    <p class="file-name" id="fileName"></p>
                </div>
                
                <button onclick="submitITR('${lender}')" class="submit-btn">Submit ITR</button>
                <button onclick="closeUploadModal()" class="cancel-btn">Cancel</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', uploadModal);
    
    // Add file input listener
    document.getElementById('itrFile').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            document.getElementById('fileName').textContent = file.name;
        }
    });
}
