/**
 * API Endpoint: Quick Lead Form Submission
 * 
 * Receives form data from custom form and forwards to HighLevel
 */

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    console.log('[API] Quick Lead endpoint hit');

    try {
        const formData = await request.formData();
        const name = formData.get('name')?.toString();
        const email = formData.get('email')?.toString();
        const phone = formData.get('phone')?.toString();

        console.log('[API] Received data:', { name, email, phone });

        // Validation
        if (!name || !email || !phone) {
            console.log('[API] Validation failed');
            return new Response(JSON.stringify({
                success: false,
                error: 'Missing required fields'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // HighLevel form endpoint
        const ghlFormId = 'qXzxX9rUnMDpX0jgk5RU';
        const ghlEndpoint = `https://api.leadconnectorhq.com/widget/form/${ghlFormId}`;

        // Create URL-encoded form data
        const ghlFormData = new URLSearchParams();
        ghlFormData.append('name', name);
        ghlFormData.append('email', email);
        ghlFormData.append('phone', phone);

        console.log('[API] Submitting to HighLevel:', ghlEndpoint);

        // Submit to HighLevel
        const response = await fetch(ghlEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: ghlFormData.toString(),
        });

        console.log('[API] HighLevel response status:', response.status);

        const responseText = await response.text();
        console.log('[API] HighLevel response:', responseText.substring(0, 200));

        // Return success
        return new Response(JSON.stringify({
            success: true,
            message: 'Thank you! We\'ll contact you within 24 hours to schedule your free consultation.'
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('[API] Error details:', error);
        if (error instanceof Error) {
            console.error('[API] Error message:', error.message);
            console.error('[API] Error stack:', error.stack);
        }

        return new Response(JSON.stringify({
            success: false,
            error: 'Server error. Please try again.'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
