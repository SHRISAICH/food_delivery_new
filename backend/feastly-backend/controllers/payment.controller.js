// Mock payment controller — replace with Razorpay/Stripe in production

exports.createPayment = async (req, res, next) => {
  try {
    const { amount, orderId } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, message: "Invalid amount" });
    }

    // Simulate payment processing
    const mockPaymentId = "pay_" + Date.now() + "_" + Math.random().toString(36).substring(7);

    // Simulate 90% success rate
    const isSuccess = Math.random() < 0.9;

    if (isSuccess) {
      res.json({
        success: true,
        data: {
          paymentId: mockPaymentId,
          amount,
          currency: "INR",
          status: "success",
          message: "Payment successful",
        },
      });
    } else {
      res.status(402).json({
        success: false,
        data: { paymentId: mockPaymentId, amount, status: "failed", message: "Payment failed. Please try again." },
      });
    }
  } catch (error) { next(error); }
};

exports.verifyPayment = async (req, res, next) => {
  try {
    const { paymentId } = req.body;
    if (!paymentId) return res.status(400).json({ success: false, message: "Payment ID is required" });

    // Mock verification
    res.json({
      success: true,
      data: { paymentId, verified: true, message: "Payment verified successfully" },
    });
  } catch (error) { next(error); }
};
