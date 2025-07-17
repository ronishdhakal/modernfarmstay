const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/* -------------------
   ROOMS
------------------- */
export const fetchRooms = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results; // Important: API pagination
  } catch (error) {
    console.error("Could not fetch rooms:", error);
    throw error;
  }
};

export const fetchRoomDetail = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms/${slug}/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Could not fetch room detail for slug ${slug}:`, error);
    throw error;
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      let errorMessage = `HTTP error! status: ${response.status}`;
      if (errorData && errorData.message) {
        errorMessage = errorData.message;
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error("Could not create booking:", error);
    throw error;
  }
};

/* -------------------
   GALLERIES
------------------- */
export async function fetchFarmhouseGallery() {
  const res = await fetch(`${API_BASE_URL}/galleries/farmhouse/`);
  if (!res.ok) throw new Error("Failed to fetch farmhouse gallery");
  return await res.json();
}

export async function fetchActivitiesGallery() {
  const res = await fetch(`${API_BASE_URL}/galleries/activities/`);
  if (!res.ok) throw new Error("Failed to fetch activities gallery");
  return await res.json();
}

/* -------------------
   CORE SECTIONS
------------------- */
export async function fetchHeroSection() {
  const res = await fetch(`${API_BASE_URL}/core/hero/`);
  if (!res.ok) throw new Error("Failed to fetch hero section");
  return await res.json();
}

export async function fetchOwnerMessage() {
  const res = await fetch(`${API_BASE_URL}/core/owner/`);
  if (!res.ok) throw new Error("Failed to fetch owner message");
  return await res.json();
}

export async function fetchCTASection() {
  const res = await fetch(`${API_BASE_URL}/core/cta/`);
  if (!res.ok) throw new Error("Failed to fetch CTA section");
  return await res.json();
}

export async function fetchFooterSetting() {
  const res = await fetch(`${API_BASE_URL}/core/footer/`);
  if (!res.ok) throw new Error("Failed to fetch footer settings");
  return await res.json();
}


// ✅ Fetch all approved reviews
export async function getReviews() {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews/`);
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}